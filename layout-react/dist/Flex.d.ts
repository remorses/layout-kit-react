import { FC } from 'react';
import { BoxProps } from './Box';
interface IFlex {
    /**
     * Shorthand for Styled-System `alignItems` prop
     */
    align?: BoxProps['alignItems'];
    /**
     * Shorthand for Styled-System `justifyContent` prop
     */
    justify?: BoxProps['justifyContent'];
    /**
     * Shorthand for Styled-System `flexWrap` prop
     */
    wrap?: BoxProps['flexWrap'];
    /**
     * Shorthand for Styled-System `flexDirection` prop
     */
    direction?: BoxProps['flexDirection'];
}
export declare type FlexProps = IFlex & BoxProps;
export declare const Flex: FC<FlexProps>;
export {};
