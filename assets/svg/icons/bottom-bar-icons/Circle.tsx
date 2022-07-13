import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number;
  color: string;
};

const Circle = (props: Props) => (
  <Svg
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 314 314"
    {...props}
  >
    <Path
      d="M157 .2C70.602.2.2 70.602.2 157c0 86.398 70.402 156.8 156.8 156.8 86.398 0 156.8-70.402 156.8-156.8C313.8 70.602 243.398.2 157 .2Zm0 33.602c68.242 0 123.2 54.961 123.2 123.2 0 68.238-54.961 123.2-123.2 123.2-68.242 0-123.2-54.961-123.2-123.2 0-68.238 54.961-123.2 123.2-123.2Z"
      fill={props.color}
    />
  </Svg>
);

export default Circle;
