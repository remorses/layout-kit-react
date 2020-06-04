import React, { forwardRef, FC } from 'react'
import { Box, BoxProps } from './Box'

export type SpacerProps = BoxProps

export const Spacer: FC<SpacerProps> = forwardRef(
    ({ align, justify, wrap, direction, ...rest }: any, ref) => (
        <Box flex='1' justifySelf='stretch' alignSelf='stretch' {...rest} />
    ),
)
