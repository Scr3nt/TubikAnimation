import React from "react";
import {
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
  ViewStyle,
} from "react-native";

import Animated from "react-native-reanimated";

import { GetCards } from "@/utils/types/GetCards";
import { GetPopularCourses } from "@/utils/types/GetPopularCourses";

type Props = {
  data: GetCards[] | GetPopularCourses[];
  renderItem: ListRenderItem<GetCards | GetPopularCourses>;
  snapToOffsets: [number, number];
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  contentContainerStyle?: ViewStyle;
};

export default function AnimatedList(props: Props) {
  return (
    <Animated.FlatList
      data={props.data}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      snapToOffsets={props.snapToOffsets}
      snapToAlignment="center"
      decelerationRate={"fast"}
      scrollEventThrottle={16}
      onScroll={props.onScroll}
      renderItem={props.renderItem}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={props?.contentContainerStyle}
      ListHeaderComponent={<View style={{ marginLeft: 15 }} />}
      ListFooterComponent={<View style={{ marginRight: 30 }} />}
    />
  );
}
