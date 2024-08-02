import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function StartPage() {
  return (
    <>
      <Helmet>
        <title>Start | Skin Quiz</title>
      </Helmet>
      <AppShell.Main>Start Page</AppShell.Main>
    </>
  );
}
