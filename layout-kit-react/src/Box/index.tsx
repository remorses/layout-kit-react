/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

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
import {
    FC,
    PropsWithChildren,
    ReactElement,
    ComponentPropsWithoutRef,
    ElementType,
} from 'react'
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

type BoxType = <as = null>(
    props: { as?: as } & Omit<BoxProps, 'as'> &
        (as extends ElementType ? ComponentPropsWithoutRef<as> : {}),
    context?: any,
) => ReactElement<any, any>

export const Box_: any = styled('div', {
    shouldForwardProp: (prop) => {
        if (nativeHTMLPropAlias.includes(prop)) {
            return true
        } else {
            return shouldForwardProp(prop)
        }
    },
})(truncate as any, systemProps) as any

export function Box<AS extends ElementType | never>(
    props: { as?: AS } & Omit<BoxProps, 'as'> &
        (AS extends never ? {} : ComponentPropsWithoutRef<AS>),
): any {
    return <Box_ {...props} />
}
