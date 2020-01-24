import React, { useMemo, useReducer } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import PropTypes from 'prop-types';

const {
  Value,
  block,
  startClock,
  Clock,
  cond,
  eq,
  timing,
  set,
  useCode,
  and,
} = Animated;

const reducer = (state, action) => {
  switch (action.type) {
    case 'initialize':
      return action.payload;
    default:
      state;
  }
};

const AccordionWrapper = ({
  style,
  children,
  expand,
  initOpen = false,
  duration = 400,
}) => {
  const [reducerState, dispatch] = useReducer(reducer, {
    height: new Value(0),
    done: false,
  });

  const { height, done } = reducerState;

  let { animatedHeight, initOpenDone } = useMemo(
    () => ({
      animatedHeight: new Value(0),
      initOpenDone: new Value(0),
    }),
    [],
  );

  const clock = new Clock();

  useCode(() => {
    const state = {
      position: animatedHeight,
      finished: new Value(0),
      time: new Value(0),
      frameTime: new Value(0),
    };
    const config = {
      toValue: height,
      duration,
      easing: Easing.linear,
    };

    return block([
      cond(and(eq(initOpen, 1), eq(initOpenDone, 0)), [
        set(animatedHeight, height),
        set(initOpenDone, 1),
      ]),
      cond(eq(expand, initOpen ? 0 : 1), [
        set(config.toValue, height),
        startClock(clock),
        timing(clock, state, config),
      ]),
      cond(eq(expand, initOpen ? 1 : 0), [
        set(config.toValue, 0),
        startClock(clock),
        timing(clock, state, config),
      ]),
    ]);
  }, [expand, done]);

  return (
    <Animated.View
      onLayout={e => {
        if (e.nativeEvent.layout.height && !done) {
          dispatch({
            type: 'initialize',
            payload: {
              height: new Value(e.nativeEvent.layout.height),
              done: true,
            },
          });
        }
      }}
      style={[
        style,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          overflow: 'hidden',
          height: initOpen && !done ? undefined : animatedHeight,
        },
      ]}>
      {children}
    </Animated.View>
  );
};

AccordionWrapper.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  expand: PropTypes.bool.isRequired,
  initOpen: PropTypes.bool,
  duration: PropTypes.number,
};

AccordionWrapper.defaultProps = {
  style: {},
  initOpen: false,
  duration: 400,
};

export default AccordionWrapper;
