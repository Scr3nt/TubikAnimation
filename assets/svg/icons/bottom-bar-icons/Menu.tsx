import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number;
  color: string;
};

const Menu = (props: Props) => (
  <Svg
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 450 393"
    {...props}
  >
    <Path
      d="M34.6 0C16.041 0 .998 15.043.998 33.602c0 18.555 15.043 33.602 33.602 33.602h380.8c18.559 0 33.602-15.043 33.602-33.602C449.002 15.043 433.959 0 415.4 0H34.6Zm0 162.4C16.041 162.4.998 177.443.998 196.002c0 18.555 15.043 33.602 33.602 33.602h380.8c18.559 0 33.602-15.043 33.602-33.602 0-18.559-15.043-33.602-33.602-33.602H34.6Zm0 162.4C16.041 324.8.998 339.843.998 358.402c0 18.555 15.043 33.602 33.602 33.602h380.8c18.559 0 33.602-15.043 33.602-33.602 0-18.559-15.043-33.602-33.602-33.602H34.6Z"
      fill={props.color}
    />
  </Svg>
);

export default Menu;
