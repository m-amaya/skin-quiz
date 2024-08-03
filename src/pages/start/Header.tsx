import { Box, Text, Title } from "@mantine/core";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <Box className={classes.box} pt="xl">
        <Title className={classes.title} lh={1}>
          Skin Quiz
        </Title>
        <Text className={classes.subtitle} ff="heading" fw={500} lts={2}>
          DIAGNOSTIC TEST
        </Text>
      </Box>
    </header>
  );
}
