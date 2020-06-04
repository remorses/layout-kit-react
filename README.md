# layout-react

Some layout components that follow the style-system spec

-   `Box`
-   `Stack`
-   `Spacer`


```
npm i layout-react @emotion/core
```

## Usage

```tsx
import { Stack, Box } from 'layout-react'

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
