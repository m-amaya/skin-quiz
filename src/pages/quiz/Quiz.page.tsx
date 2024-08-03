import {
  AppShell,
  Button,
  Chip,
  Flex,
  Group,
  Image,
  Title
} from "@mantine/core";
import { Helmet } from "react-helmet";
import {
  GrLinkNext as NextIcon,
  GrLinkPrevious as PreviousIcon
} from "react-icons/gr";
import classes from "./Quiz.module.css";

export function QuizPage() {
  return (
    <>
      <Helmet>
        <title>Quiz | Skin Quiz</title>
      </Helmet>
      <AppShell.Main className={classes.main}>
        <Flex className={classes.top} flex={1}>
          <Flex align="center" className={classes.container} gap="xl" p="lg">
            <Image height={100} src="/logo.png" alt="Logo image" />
            <Title order={2}>What are your top 3 skin concerns?</Title>
          </Flex>
        </Flex>
        <Flex className={classes.bottom} flex={1}>
          <Flex
            className={classes.container}
            direction="column"
            justify="space-between"
            px="lg"
            pt="xl"
            pb={80}
          >
            <Chip.Group multiple>
              <Group justify="center">
                <Chip
                  classNames={{ label: classes.chipLabel }}
                  checked
                  value={1}
                >
                  Option 1
                </Chip>
                <Chip classNames={{ label: classes.chipLabel }} value={2}>
                  Option 2
                </Chip>
                <Chip classNames={{ label: classes.chipLabel }} value={3}>
                  Option 3
                </Chip>
              </Group>
            </Chip.Group>
            <Group justify="space-between">
              <Button
                leftSection={<PreviousIcon />}
                size="lg"
                variant="outline"
              >
                Previous
              </Button>
              <Button rightSection={<NextIcon />} size="lg" variant="outline">
                Next
              </Button>
            </Group>
          </Flex>
        </Flex>
      </AppShell.Main>
    </>
  );
}
