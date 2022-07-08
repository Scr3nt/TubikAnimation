import { Dimensions, View } from "react-native";
import React, { useState } from "react";

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  runOnJS,
} from "react-native-reanimated";

import Section from "@/components/atoms/Section";
import SemiRoundCard from "./SemiRoundCard";

import colors from "@/theme/colors";

const data = [1, 2, 3];
const semiRoundCardSize = Dimensions.get("window").width - 45;

export default function AnimatedList() {
  const [, setContentOffsetX] = useState(0);

  const flatListScrollX = useSharedValue(0);

  const toggleSectionOpacity = (value: number) => {
    setContentOffsetX(value);
  };

  const flatListScrollHandler = useAnimatedScrollHandler((event) => {
    flatListScrollX.value = event.contentOffset.x;
    runOnJS(toggleSectionOpacity)(event.contentOffset.x);
  });

  const renderItem = ({ index }) => {
    return (
      <View style={{ marginLeft: 15 }}>
        <SemiRoundCard
          colorBottomRound={colors.darkblue}
          children={
            <Section
              isVisible={
                semiRoundCardSize * index - 45 <= flatListScrollX.value
              }
              index={index}
            />
          }
        />
      </View>
    );
  };

  return (
    <Animated.FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      snapToOffsets={[0, Dimensions.get("window").width - 45]}
      snapToAlignment="center"
      decelerationRate={"fast"}
      scrollEventThrottle={16}
      onScroll={flatListScrollHandler}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginBottom: 35 }}
      ListHeaderComponent={<View style={{ marginLeft: 15 }} />}
      ListFooterComponent={<View style={{ marginRight: 30 }} />}
    />
  );
}
