import React, { useState } from "react";
import { Dimensions, ListRenderItem, View } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  runOnJS,
} from "react-native-reanimated";
import { useQuery } from "react-query";

import SemiRoundCardContent from "@/components/atoms/SemiRoundCardContent";
import SemiRoundCard from "../molecules/SemiRoundCard";
import SemiRoundCardPlaceholder from "../atoms/SemiRoundCardPlaceholder";

import API from "@/utils/API";
import { GetCards } from "@/utils/types/GetCards";
import { DATA_BACKUP } from "@/utils/const/global";

const semiRoundCardSize = Dimensions.get("window").width - 45;

export default function AnimatedList() {
  const { data: datas, isLoading } = useQuery(["data"], API.getCards);

  const [, setContentOffsetX] = useState(0);

  const flatListScrollX = useSharedValue(0);

  const toggleSemiRoundCardContentOpacity = (value: number) => {
    setContentOffsetX(value);
  };

  const flatListScrollHandler = useAnimatedScrollHandler((event) => {
    flatListScrollX.value = event.contentOffset.x;
    // this is for rerender the props isVisible for the component SemiRoundCardContent but it's killing js performance
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
              index={index}
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
    <Animated.FlatList
      data={datas || DATA_BACKUP}
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
