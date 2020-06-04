import { FC } from 'react';
import * as StyledSystem from 'styled-system';
import { BoxProps } from './Box';
import { FlexProps } from './Flex';
interface IStack {
    /**
     * If `true` the items will be stacked horizontally inline.
     */
    isInline?: boolean;
    /**
     * If `true` the items will be displayed in reverse order.
     */
    isReversed?: boolean;
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
    /**
     * If `true`, the children will be wrapped in a `Box` with
     * `display: inline-block`, and the `Box` will take the spacing props
     */
    shouldWrapChildren?: boolean;
}
export declare type StackProps = IStack & BoxProps;
export declare const Stack: FC<StackProps>;
export {};
