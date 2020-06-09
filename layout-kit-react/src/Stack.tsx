/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
    Children,
    cloneElement,
    FC,
    forwardRef,
    isValidElement,
    useMemo,
} from 'react'
import * as StyledSystem from 'styled-system'
import { Box, BoxProps } from './Box'
import { Flex, FlexProps } from './Flex'
import { mapResponsive } from './utils'
import css from '@styled-system/css'

interface IStack {
    /**
     * The direction to stack the items.
     */
    direction?: FlexProps['direction']
    /**
     * The content of the stack.
     */
    children?: React.ReactNode
    /**
     * The space between each stack item
     */
    spacing?: StyledSystem.MarginProps['margin']
    /**
     * The alignment of the stack item. Similar to `align-items`
     */
    align?: FlexProps['align']
    /**
     * The distribution of the stack item. Similar to `justify-content`
     */
    justify?: FlexProps['justify']
}

export type StackProps = IStack & BoxProps

export const Stack: FC<StackProps> = forwardRef(
    (
        {
            direction = 'column',
            align,
            justify,
            spacing = '0px',
            children,
            ...rest
        },
        ref,
    ) => {
        const selector = '> * + *'

        const styles = useMemo(
            () =>
                css({
                    [selector]: mapResponsive(direction, (value) => ({
                        [value === 'column'
                            ? 'marginTop'
                            : 'marginLeft']: spacing,
                        [value === 'column' ? 'marginLeft' : 'marginTop']: 0,
                    })),
                }),
            [direction, spacing],
        )
        return (
            <Box
                ref={ref}
                display='flex'
                alignItems={align}
                justifyContent={justify}
                flexDirection={direction}
                css={styles as any}
                {...rest}
            >
                {children}
            </Box>
        )
    },
)
