import { getInstance } from '@module-federation/runtime-tools';
import {
  type ComponentType,
  type LazyExoticComponent,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';

import Header from './components/header';
import Loading from './components/loading';
import NotificationModal from './components/notification-modal';
import './index.css';
import emitter from './services/eventEmitter';
import type { EventEmitterLike } from './services/eventEmitter';
import { Main, NotFound } from './styles';

type RemoteConfig = {
  url: string;
  extras: {
    name: string;
    alias: string;
    exposed: string;
    route?: string;
    routes?: string[];
  };
};

type FrontendDiscovery = {
  microFrontends: Record<string, RemoteConfig[]>;
};

type RouteConfig = {
  path: string;
  request: string;
};

type SystemProps = {
  request: string;
  mfInstance: ReturnType<typeof getInstance> | null;
};

type RemoteMFEProps = {
  emitter: EventEmitterLike;
  onNavigate?: (path: string) => void;
};

const System = ({ request, mfInstance }: SystemProps) => {
  const navigate = useNavigate();

  if (!request) {
    return <h2>No system specified</h2>;
  }

  if (!mfInstance) {
    return <div>Module Federation instance not initialized</div>;
  }

  const MFE = lazy(() =>
    mfInstance
      .loadRemote(request)
      .then((module) => {
        if (!module) {
          throw new Error(`Module is undefined for request: ${request}`);
        }
        return {
          default: module.default || module,
        };
      })
      .catch((error) => {
        console.error(`Failed to load remote: ${request}`, error);
        throw error;
      }),
  ) as LazyExoticComponent<ComponentType<RemoteMFEProps>>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MFE emitter={emitter} onNavigate={(path: string) => navigate(path)} />
    </Suspense>
  );
};

/**
 * Generate routes for a specific MFE
 * @param {string} name - MFE name
 * @param {string} exposed - Exposed component name
 * @param {string} route - Main route path
 * @param {string[]} routes - Optional nested routes
 * @returns {Array} Array of route configurations
 */
const generateRoutesForMFE = (
  name: string,
  exposed: string,
  route: string | undefined,
  routes: string[] | undefined,
): RouteConfig[] => {
  const routeConfigs: RouteConfig[] = [];

  // Add nested routes FIRST (more specific routes)
  if (routes && Array.isArray(routes)) {
    routes.forEach((nestedRoute) => {
      routeConfigs.push({
        path: nestedRoute,
        request: `${name}/${exposed}`,
      });
    });
  }

  // Then add the main route (more general route)
  routeConfigs.push({
    path: route as string,
    request: `${name}/${exposed}`,
  });

  return routeConfigs;
};

function App() {
  const [routes, setRoutes] = useState<RouteConfig[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [mfInstance, setMfInstance] = useState<ReturnType<typeof getInstance> | null>(null);

  const initializeMFEs = useCallback(async () => {
    if (isInitialized) return;

    try {
      // Get the existing instance created by webpack
      const instance = getInstance();
      setMfInstance(instance);

      const response = await fetch('http://localhost:8081/frontend-discovery.json');
      const data = (await response.json()) as FrontendDiscovery;

      const remotes = [];
      const routeConfigs = [];

      for (const [, configs] of Object.entries(data.microFrontends)) {
        const config = configs[0];
        const { name, alias, exposed, route, routes } = config.extras;

        // Register the remote MFE
        remotes.push({
          name,
          alias,
          entry: config.url,
        });

        // Generate routes for this MFE
        const mfeRoutes = generateRoutesForMFE(name, exposed, route, routes);
        routeConfigs.push(...mfeRoutes);
      }

      await instance.registerRemotes(remotes);

      setRoutes(routeConfigs);
      setIsInitialized(true);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to initialize MFEs:', error);
      setIsLoading(false);
    }
  }, [isInitialized]);

  useEffect(() => {
    initializeMFEs();
  }, [initializeMFEs]);

  return (
    <Router>
      <div>
        <Header />
        <Main>
          {isLoading ? (
            <Loading />
          ) : (
            <Routes>
              {routes.map((route, index) => (
                <Route
                  element={<System mfInstance={mfInstance} request={route.request} />}
                  key={index}
                  path={route.path}
                />
              ))}
              <Route
                path="*"
                element={
                  <NotFound>
                    <h2>Page not found</h2>
                    <p>Current path: {window.location.pathname}</p>
                    <p>Available routes: {routes.map((r) => r.path).join(', ')}</p>
                  </NotFound>
                }
              />
            </Routes>
          )}
        </Main>
        <NotificationModal emitter={emitter} />
      </div>
    </Router>
  );
}

export default App;
