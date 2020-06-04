import React, { forwardRef, FC } from 'react'
import { Box, BoxProps } from './Box'
import { ResponsiveValue } from 'styled-system'

interface IFlex {
    /**
     * Shorthand for Styled-System `alignItems` prop
     */
    align?: ResponsiveValue<
        | 'center'
        | 'stretch'
        | 'flex-start'
        | 'flex-end'
        | 'baseline'
        | 'inherit'
    >
    /**
     * Shorthand for Styled-System `justifyContent` prop
     */
    justify?: ResponsiveValue<
        | 'center'
        | 'stretch'
        | 'flex-start'
        | 'flex-end'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'inherit'
    >
    /**
     * Shorthand for Styled-System `flexWrap` prop
     */
    wrap?: BoxProps['flexWrap']
    /**
     * Shorthand for Styled-System `flexDirection` prop
     */
    direction?: ResponsiveValue<
        'column' | 'column-reverse' | 'row' | 'row-reverse'
    >
}

export type FlexProps = IFlex & BoxProps

export const Flex: FC<FlexProps> = forwardRef(
    ({ align, justify, wrap, direction, ...rest }: IFlex, ref) => (
        <Box
            ref={ref}
            display='flex'
            flexDirection={direction}
            alignItems={align}
            justifyContent={justify}
            flexWrap={wrap}
            {...rest}
        />
    ),
)
