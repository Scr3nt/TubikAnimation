import React, { useState } from "react";
import { Dimensions, ListRenderItem, View } from "react-native";

import {
  useSharedValue,
  useAnimatedScrollHandler,
  runOnJS,
} from "react-native-reanimated";
import { useQuery } from "react-query";

import AnimatedList from "../atoms/AnimatedList";
import CardPlaceholder from "../atoms/CardPlaceholder";

import Card from "../molecules/Card";

import API from "@/utils/API";
import { GetPopularCourses } from "@/utils/types/GetPopularCourses";
import { POPULAR_COURSES_DATA_BACKUP } from "@/utils/const/global";

type Props = {
  isVisible: boolean;
};

const cardSize = Dimensions.get("window").width - 45;

export default function CardList(props: Props) {
  const { data: datas, isLoading } = useQuery(
    ["popular-courses"],
    API.getPopularCourses
  );

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
    return <CardPlaceholder />;
  }

  const renderItem: ListRenderItem<GetPopularCourses> = ({ item, index }) => {
    return (
      <View style={{ marginLeft: 15 }}>
        <Card
          isVisible={
            props.isVisible && cardSize * index - 45 <= flatListScrollX.value
          }
          section={item.section}
          title={item.title}
          number={item.number}
          numberDescription={item.number_description}
        />
      </View>
    );
  };

  return (
    <AnimatedList
      data={datas || POPULAR_COURSES_DATA_BACKUP}
      renderItem={renderItem}
      snapToOffsets={[0, Dimensions.get("screen").width - 45]}
      onScroll={flatListScrollHandler}
    />
  );
}
