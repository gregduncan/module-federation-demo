
    export type RemoteKeys = 'catalogue/MFE';
    type PackageType<T> = T extends 'catalogue/MFE' ? typeof import('catalogue/MFE') :any;