import { FC } from 'react';
import { BoxProps } from './Box';
import { FlexProps } from './Flex';
interface IWrap {
    /**
     * The space between the each child (even if it wraps)
     */
    spacing?: FlexProps['margin'];
    /**
     * The `justify-content` value (for cross-axis alignment)
     */
    justify?: FlexProps['justifyContent'];
    /**
     * The `align-items` value (for main axis alignment)
     */
    align?: FlexProps['alignItems'];
    /**
     * The `flex-direction` value
     */
    direction?: FlexProps['flexDirection'];
}
export declare type WrapProps = IWrap & BoxProps;
export declare const Wrap: FC<WrapProps>;
export {};
