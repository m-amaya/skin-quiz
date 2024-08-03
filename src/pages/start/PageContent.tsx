import { AppShell, Button, Flex, Stack, Text, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import classes from "./PageContent.module.css";

export function PageContent() {
  return (
    <AppShell.Main className={classes.main} p="md">
      <Flex className={classes.wrapper}>
        <Stack>
          <Stack gap="sm">
            <Text ff="heading" fw={500}>
              DIAGNOSTIC
            </Text>
            <Title lh={1}>Understand your skin and its complex needs.</Title>
          </Stack>
          <Text>
            Everyone&apos;s skin is unique, just like every skin diagnosis we
            give. Take our test to get personalized skincare recommendations. It
            shouldn&apos;t take more than 4 minutes. Over 5 million people have
            been given a skin diagnosis using our method, validated by
            dermatologists.
          </Text>
          <NavLink className={classes.navlink} to="/quiz">
            <Button fullWidth size="lg">
              Start Quiz
            </Button>
          </NavLink>
          <Text size="xs">
            DISCLAIMER: This is for demo purposes only. No personal data is
            stored or shared at any time.
          </Text>
        </Stack>
      </Flex>
    </AppShell.Main>
  );
}
