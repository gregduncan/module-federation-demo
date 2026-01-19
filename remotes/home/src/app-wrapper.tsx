import { type Root, createRoot } from 'react-dom/client';

import App from './app';

type AppWrapperProps = Record<string, unknown>;

const roots = new WeakMap<HTMLDivElement, Root>();

const AppWrapper = (props: AppWrapperProps) => {
  const containerRef = (node: HTMLDivElement | null) => {
    if (node) {
      let root = roots.get(node);
      if (!root) {
        root = createRoot(node);
        roots.set(node, root);
      }
      root.render(<App {...props} />);
    }
  };

  return <div ref={containerRef} />;
};

export default AppWrapper;
