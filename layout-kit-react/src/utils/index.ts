import { isArray, isObject } from './assertion'

export function mapResponsive(prop: any, mapper: (val: any) => any) {
    if (isArray(prop)) {
        // remove null values, using the previous value
        prop = prop.reduce((acc: string[], x: string) => {
            if (x == null) {
                let last = acc.length !== 0 ? acc[acc.length - 1] : x
                return [...acc.slice(0, -1), last, last]
            }
            return [...acc, x]
        }, [])
        return prop.map(mapper)
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
