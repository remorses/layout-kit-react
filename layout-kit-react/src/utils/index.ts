import { isArray, isObject } from './assertion'
import React from 'react'

export function mapResponsive(prop: any, mapper: (val: any) => any) {
    if (isArray(prop)) {
        // remove null values, using the previous value
        return prop.map((x) => {
            if (x === null) {
                return null
            }
            return mapper(x)
        })
    }

    if (isObject(prop)) {
        return Object.keys(prop).reduce((result: Record<any, any>, key) => {
            result[key] = mapper(prop[key])
            return result
        }, {})
    }

    if (prop != null) {
        return mapper(prop)
    }

    return null
}

export function getValidChildren(children: React.ReactNode) {
    return React.Children.toArray(children).filter((child) =>
        React.isValidElement(child),
    ) as React.ReactElement[]
}
