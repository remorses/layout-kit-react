import { FC } from 'react';
import { BoxProps } from './Box';
import { ResponsiveValue } from 'styled-system';
interface IFlex {
    /**
     * Shorthand for Styled-System `alignItems` prop
     */
    align?: ResponsiveValue<'center' | 'stretch' | 'flex-start' | 'flex-end' | 'baseline' | 'inherit'>;
    /**
     * Shorthand for Styled-System `justifyContent` prop
     */
    justify?: ResponsiveValue<'center' | 'stretch' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'inherit'>;
    /**
     * Shorthand for Styled-System `flexWrap` prop
     */
    wrap?: BoxProps['flexWrap'];
    /**
     * Shorthand for Styled-System `flexDirection` prop
     */
    direction?: ResponsiveValue<'column' | 'column-reverse' | 'row' | 'row-reverse'>;
}
export declare type FlexProps = IFlex & BoxProps;
export declare const Flex: FC<FlexProps>;
export {};
