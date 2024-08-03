import { Flex } from "@mantine/core";
import classes from "./PlayVideo.module.css";

export function PlayVideo() {
  return (
    <Flex className={classes.container} visibleFrom="sm">
      <video className={classes.video} autoPlay loop muted>
        <source src="/skincare.mp4" type="video/mp4" />
      </video>
    </Flex>
  );
}
