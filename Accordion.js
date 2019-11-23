import React, { useMemo, useState } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
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

const areEqual = (prevProps, nextProps) => {
  if (prevProps.expand === nextProps.expand) {
    return true;
  } else {
    return false;
  }
};

const Accordion = ({
  style,
  children,
  expand,
  initOpen = false,
  duration = 300,
}) => {
  const [height, setHeight] = useState(new Value(0));
  const [done, setDone] = useState(false);

  let { animatedHeight, initOpenDone } = useMemo(
    () => ({
      animatedHeight: new Value(0),
      initOpenDone: new Value(0),
      expand,
    }),
    [],
  );

  const clock = new Clock();
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

  useCode(() =>
    block([
      cond(and(eq(initOpen, 1), eq(initOpenDone, 0)), [
        set(animatedHeight, height),
        set(initOpenDone, 1),
      ]),
      cond(eq(expand, initOpen ? 0 : 1), [
        startClock(clock),
        timing(clock, state, config),
      ]),
      cond(eq(expand, initOpen ? 1 : 0), [
        set(config.toValue, 0),
        startClock(clock),
        timing(clock, state, config),
      ]),
    ]),
  );

  return (
    <Animated.View
      onLayout={e => {
        if (e.nativeEvent.layout.height && !done) {
          setHeight(new Value(e.nativeEvent.layout.height));
          setDone(true);
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

export default React.memo(Accordion, areEqual);
