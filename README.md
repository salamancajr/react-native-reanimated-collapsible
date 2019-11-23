## react-native-reanimated-collapsible

Animated collapsible component for React Native using the native thread. Inspired by react-native-collapsible.

![GIF of react-native-reanimated-collapsible example](https://media.giphy.com/media/dZjmjRWdyVbOrJQLHj/giphy.gif)

## Installation

I. First install the react-native-reanimated library from npm repository using yarn:

```
yarn add react-native-reanimated
```

II. Then install the library from the npm repository using yarn:

```
yarn add react-native-reanimated-collapsible
```

III. You may need to run pod update:

```
cd ios && pod update
```

## Props
### expand
Boolean value that toggles the animation height from the opened to closed state. Required.

### initOpen
Boolean value that initializes the wrapped component in the open position. Default value is false.

### duration
Number type value that sets the duration of the animation. Default value is 300.


Currently, the library only supports react versions compatible with react-hooks.