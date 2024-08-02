import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function QuizPage() {
  return (
    <>
      <Helmet>
        <title>Quiz | Skin Quiz</title>
      </Helmet>
      <AppShell.Main>Quiz Page</AppShell.Main>
    </>
  );
}
