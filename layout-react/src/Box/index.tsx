/** @jsx jsx */
import styled from '@emotion/styled'
import {
    createShouldForwardProp,
    props,
} from '@styled-system/should-forward-prop'
export * from './types'
import {
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography,
    compose,
} from 'styled-system'
import extraConfig from './config'
import { FC } from 'react'
import { BoxProps } from './types'

export const truncate = (props) => {
    if (props.isTruncated) {
        return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        }
    }
}

export const systemProps = compose(
    layout,
    color,
    space,
    background,
    border,
    grid,
    position,
    shadow,
    typography,
    flexbox,
    extraConfig,
)

const shouldForwardProp = createShouldForwardProp([
    ...props,
    'd',
    'textDecoration',
    'pointerEvents',
    'visibility',
    'transform',
    'cursor',
    'fill',
    'stroke',
])

/**
 * htmlWidth and htmlHeight is used in the <Image />
 * component to support the native `width` and `height` attributes
 *
 * https://github.com/chakra-ui/chakra-ui/issues/149
 */
const nativeHTMLPropAlias = ['htmlWidth', 'htmlHeight']

export const Box: FC<BoxProps> = styled('div', {
    shouldForwardProp: (prop) => {
        if (nativeHTMLPropAlias.includes(prop)) {
            return true
        } else {
            return shouldForwardProp(prop)
        }
    },
})(truncate as any, systemProps) as any
