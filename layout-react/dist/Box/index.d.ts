export * from './types';
import { FC } from 'react';
import { BoxProps } from './types';
export declare const truncate: (props: any) => {
    overflow: string;
    textOverflow: string;
    whiteSpace: string;
};
export declare const systemProps: import("styled-system").styleFn;
export declare const Box: FC<BoxProps>;
