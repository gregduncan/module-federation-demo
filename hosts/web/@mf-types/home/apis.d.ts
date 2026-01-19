
    export type RemoteKeys = 'home/MFE';
    type PackageType<T> = T extends 'home/MFE' ? typeof import('home/MFE') :any;