import React, { forwardRef, FC } from 'react'
import { Box, BoxProps } from './Box'

interface IFlex {
    /**
     * Shorthand for Styled-System `alignItems` prop
     */
    align?: BoxProps['alignItems']
    /**
     * Shorthand for Styled-System `justifyContent` prop
     */
    justify?: BoxProps['justifyContent']
    /**
     * Shorthand for Styled-System `flexWrap` prop
     */
    wrap?: BoxProps['flexWrap']
    /**
     * Shorthand for Styled-System `flexDirection` prop
     */
    direction?: BoxProps['flexDirection']
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

Flex.displayName = 'Flex'
