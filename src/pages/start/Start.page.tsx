import { Flex } from "@mantine/core";
import { Header } from "@src/pages/start/Header";
import { PageContent } from "@src/pages/start/PageContent";
import { PlayVideo } from "@src/pages/start/PlayVideo";
import { Helmet } from "react-helmet";

export function StartPage() {
  return (
    <>
      <Helmet>
        <title>Start | Skin Quiz</title>
      </Helmet>
      <Flex>
        <Header />
        <PlayVideo />
        <PageContent />
      </Flex>
    </>
  );
}
