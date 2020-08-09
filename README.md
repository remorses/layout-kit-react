# layout-kit-react


## Features

- Design tokens with autocomplete, stop using magic value in px and instead use the design system (easily discoverable thanks to auto complete)
- Style is strictly coupled with markup
- 


Some layout components that follow the style-system spec

-   `Box`
-   `Stack`
-   `Spacer`


```
npm i layout-kit-react @emotion/core
```

## Usage

```tsx
import { Stack, Box } from 'layout-kit-react'

const App = () => {
    return (
        <Stack m='40px' spacing='40px' direction={['column', null, 'row']}>
            <Box w='100px' h='100px' bg='red.500' />
            <Box w='100px' h='100px' bg='red.500' />
            <Box w='100px' h='100px' bg='red.500' />
            <Box w='100px' h='100px' bg='red.500' />
        </Stack>
    )
}
```
