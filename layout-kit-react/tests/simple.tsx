import assert from 'assert'
import { Box } from '../src'
import { ComponentPropsWithoutRef } from 'react'

it('ready', () => {
    assert(true)
})

const c = <Box />

declare const x: ComponentPropsWithoutRef<'video'>
