import React, { useEffect, useState } from "react";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type Props = {
  isVisible: boolean;
  opacityDefault: number;
  children: React.ReactNode;
};

export default function AnimatedOpacityText(props: Props) {
  const opacity = useSharedValue(props.opacityDefault);

  const [opacityVisible, setOpacityVisible] = useState(false);

  useEffect(() => {
    if (opacityVisible) {
      opacity.value = 1;
    } else if (props.isVisible) {
      setOpacityVisible(true);
      opacity.value = 1;
    } else {
      opacity.value = props.opacityDefault;
    }
  }, [props.isVisible]);

  const style = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500 }),
    };
  });

  return <Animated.View style={[style]}>{props.children}</Animated.View>;
}
