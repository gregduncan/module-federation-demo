declare module '@module-federation/runtime-tools' {
  export type RemoteConfig = {
    name: string;
    alias?: string;
    entry: string;
  };

  export type ModuleFederationInstance = {
    registerRemotes: (remotes: RemoteConfig[]) => Promise<void>;
    loadRemote: (request: string) => Promise<any>;
  };

  export function getInstance(): ModuleFederationInstance;
}
