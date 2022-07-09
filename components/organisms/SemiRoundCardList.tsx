import React, { useState } from "react";
import { Dimensions, ListRenderItem, View } from "react-native";

import {
  useSharedValue,
  useAnimatedScrollHandler,
  runOnJS,
} from "react-native-reanimated";
import { useQuery } from "react-query";

import SemiRoundCardPlaceholder from "../atoms/SemiRoundCardPlaceholder";
import AnimatedList from "../atoms/AnimatedList";

import SemiRoundCardContent from "../molecules/SemiRoundCardContent";
import SemiRoundCard from "../molecules/SemiRoundCard";

import API from "@/utils/API";
import { GetCards } from "@/utils/types/GetCards";
import { CARDS_DATA_BACKUP } from "@/utils/const/global";

const semiRoundCardSize = Dimensions.get("window").width - 45;

export default function SemiRoundCardList() {
  const { data: datas, isLoading } = useQuery(["cards"], API.getCards);

  const [, setContentOffsetX] = useState(0);

  const flatListScrollX = useSharedValue(0);

  const toggleSemiRoundCardContentOpacity = (value: number) => {
    setContentOffsetX(value);
  };

  const flatListScrollHandler = useAnimatedScrollHandler((event) => {
    flatListScrollX.value = event.contentOffset.x;
    // this is for rerender the props isVisible for the component SemiRoundCardContent but it's killing js performance on simulator
    if (event.contentOffset.x >= 0) {
      runOnJS(toggleSemiRoundCardContentOpacity)(event.contentOffset.x);
    }
  });

  if (isLoading) {
    return <SemiRoundCardPlaceholder />;
  }

  const renderItem: ListRenderItem<GetCards> = ({ item, index }) => {
    return (
      <View style={{ marginLeft: 15 }}>
        <SemiRoundCard
          colorBottomRound={item.roundCardColor}
          children={
            <SemiRoundCardContent
              isVisible={
                semiRoundCardSize * index - 45 <= flatListScrollX.value
              }
              section={item.section}
              title={item.title}
              subtitle={item.subtitle}
              category={item.category}
              author={item.author}
            />
          }
        />
      </View>
    );
  };

  return (
    <AnimatedList
      data={datas || CARDS_DATA_BACKUP}
      renderItem={renderItem}
      snapToOffsets={[0, Dimensions.get("screen").width - 45]}
      onScroll={flatListScrollHandler}
      contentContainerStyle={{ marginBottom: 35 }}
    />
  );
}
