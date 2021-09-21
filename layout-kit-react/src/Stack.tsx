/** @jsx jsx */
import { jsx, } from '@emotion/react'
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
import css from './css'

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
            align = 'flex-start',
            justify,
            spacing = '0px',
            children,
            ...rest
        },
        ref,
    ) => {
        const selector = '> *:not(style) ~ *:not(style)'

        const directionStyles = {
            column: { mt: spacing, ml: 0 },
            row: { ml: spacing, mt: 0 },
            'column-reverse': { mb: spacing, mr: 0 },
            'row-reverse': { mr: spacing, mb: 0 },
        }

        const styles = useMemo(
            () =>
                css({
                    [selector]: mapResponsive(direction, (value) => ({
                        ...directionStyles[value],
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

export const ZStack = ({
    children,
    direction = 'column',
    align = 'center',
    justify = 'center',
    ...rest
}: Omit<StackProps, 'spacing'>) => {
    const stackProps: StackProps = {
        spacing: '0px',
        direction,
        align,
        justify,
    }
    return (
        <Box display='grid' {...rest}>
            {Children.map(children, (child, i) => {
                return (
                    <Stack gridColumn='1' gridRow='1' {...stackProps}>
                        {child}
                    </Stack>
                )
            })}
        </Box>
    )
}

// export const ZStack = ({
//     children,
//     direction = 'column',
//     align = 'center',
//     justify = 'center',
//     ...rest
// }: Omit<StackProps, 'spacing'>) => {
//     const stackProps: StackProps = {
//         spacing: '0px',
//         direction,
//         align,
//         justify,
//     }
//     return (
//         <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' {...rest}>
//             {Children.map(children, (child, i) => {
//                 return <Box w='100%' flex='1' transform={`translateX(-${100 * i}%)`}>{child}</Box>
//             })}
//         </Box>
//     )
// }
