import { FC } from 'react';
import * as StyledSystem from 'styled-system';
import { BoxProps } from './Box';
import { FlexProps } from './Flex';
interface IStack {
    /**
     * The direction to stack the items.
     */
    direction?: FlexProps['direction'];
    /**
     * The content of the stack.
     */
    children?: React.ReactNode;
    /**
     * The space between each stack item
     */
    spacing?: StyledSystem.MarginProps['margin'];
    /**
     * The alignment of the stack item. Similar to `align-items`
     */
    align?: FlexProps['align'];
    /**
     * The distribution of the stack item. Similar to `justify-content`
     */
    justify?: FlexProps['justify'];
}
export declare type StackProps = IStack & BoxProps;
export declare const Stack: FC<StackProps>;
export declare const ZStack: ({ children, direction, align, justify, ...rest }: Omit<StackProps, 'spacing'>) => JSX.Element;
export {};
