import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number;
  color: string;
};

const Home = (props: Props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 420 479"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M420 175c0-22.027-10.383-42.77-28-56L252 14c-24.898-18.668-59.102-18.668-84 0L28 119c-17.617 13.23-28 33.973-28 56v233.33c0 38.664 31.336 70 70 70h280c38.664 0 70-31.336 70-70V175Zm-46.668 0v233.33c0 12.883-10.453 23.336-23.332 23.336H70c-12.879 0-23.332-10.453-23.332-23.336V175A23.319 23.319 0 0 1 56 156.332l140-105a23.309 23.309 0 0 1 28 0l140 105A23.319 23.319 0 0 1 373.332 175Zm-256.66 210h186.66c12.883 0 23.336-10.453 23.336-23.332 0-12.883-10.453-23.336-23.336-23.336h-186.66c-12.883 0-23.336 10.453-23.336 23.336 0 12.879 10.453 23.332 23.336 23.332Z"
      fill={props.color}
    />
  </Svg>
);

export default Home;
