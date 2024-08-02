import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function ResultsPage() {
  return (
    <>
      <Helmet>
        <title>Results | Skin Quiz</title>
      </Helmet>
      <AppShell.Main>Results Page</AppShell.Main>
    </>
  );
}
