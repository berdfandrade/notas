# Global Styles 

`GlobalStyle` is a new component in v1 that injects styles defined in `theme.styles.global` into the global styles of your app or website.

This allows you to define theme-aware styles for any elements.

### How it works 

By using `ChakraProvider` at the root of your application, we automatically render a `GlobalStyle` component. Here's what `GlobalStyle` does under the hood: 

    - Reads the styles defined in `theme.styles.global`, this style can be a style object or a function that returns a style object.

    - Process the styles and pass it to the emotion's `Global` component which is use to handle global style injection. 

```typescript

// 1. Using a style object

const theme = {
  styles: {
    global: {
      'html, body': {
        color: 'gray.600',
        lineHeight: 'tall',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
}


// 2. Using a function
// NB: Chakra gives you access to `colorMode` and `theme` in `props`

const theme = {
  styles: {
    global: (props) => ({
      'html, body': {
        fontSize: 'sm',
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        lineHeight: 'tall',
      },
      a: {
        color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
      },
    }),
  },
}

```

### Default styles 

The default Chakra theme provides sensible global styles. Here's what it looks like: 

```typescript
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
}
```

### Styling non-chakra elements globally

When combining Chakra with other libraries, you might need a way to style some elements in those libraries using the theme defined tokens.

Let's say you have a blog written in `mdx` and you'd like to style all the MDX elements globally. Here's what you'll do.

