import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number;
  color: string;
};

const Create = (props: Props) => (
  <Svg
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 236 236"
    {...props}
  >
    <Path
      d="M118 .4c-6.187 0-11.199 5.016-11.199 11.199v95.199H11.602c-6.187 0-11.199 5.016-11.199 11.199 0 6.188 5.016 11.199 11.2 11.199H106.8v95.199c0 6.187 5.016 11.199 11.199 11.199 6.188 0 11.199-5.016 11.199-11.199v-95.199h95.199c6.188 0 11.199-5.016 11.199-11.199 0-6.187-5.016-11.199-11.199-11.199h-95.199V11.599C129.199 5.411 124.183.4 118 .4Z"
      fill={props.color}
    />
  </Svg>
);

export default Create;
