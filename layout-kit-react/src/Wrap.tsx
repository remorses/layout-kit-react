/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import {
    Children,
    cloneElement,
    FC,
    forwardRef,
    isValidElement,
    useMemo,
    useContext,
} from 'react'
import * as StyledSystem from 'styled-system'
import { Box, BoxProps } from './Box'
import { Flex, FlexProps } from './Flex'
import { mapResponsive, getValidChildren } from './utils'
import css from '@styled-system/css'

interface IWrap {
    /**
     * The space between the each child (even if it wraps)
     */
    spacing?: FlexProps['margin']
    /**
     * The `justify-content` value (for cross-axis alignment)
     */
    justify?: FlexProps['justifyContent']
    /**
     * The `align-items` value (for main axis alignment)
     */
    align?: FlexProps['alignItems']
    /**
     * The `flex-direction` value
     */
    direction?: FlexProps['flexDirection']
}

export type WrapProps = IWrap & BoxProps

export const Wrap: FC<WrapProps> = forwardRef(
    (
        {
            direction = 'row',
            align,
            justify,
            spacing = '0px',
            children,
            ...rest
        },
        ref,
    ) => {
        const theme = useContext(ThemeContext)
        const itemSpacing = mapResponsive(spacing, (value) => {
            const { margin } = css({ margin: value })(theme)
            return `calc(${margin} / 2)`
        })

        const groupSpacing = mapResponsive(spacing, (value) => {
            const { margin } = css({ margin: value })(theme)
            return `calc(${margin} / 2 * -1)`
        })

        const validChildren = getValidChildren(children)

        const clones = validChildren.map((child, index) => (
            <Box as='li' key={index} margin={itemSpacing} display='inline-flex'>
                {child}
            </Box>
        ))

        return (
            <Box ref={ref} {...rest}>
                <Box
                    as='ul'
                    css={css({
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: justify,
                        alignItems: align,
                        flexDirection: direction,
                        listStyleType: 'none',
                        padding: '0',
                        margin: groupSpacing,
                    })}
                >
                    {clones}
                </Box>
            </Box>
        )
    },
)
