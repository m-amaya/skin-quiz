import { Layout } from "@src/components/layout";
import { QuizPage } from "@src/pages/quiz";
import { ResultsPage } from "@src/pages/results";
import { StartPage } from "@src/pages/start";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/start",
        element: <StartPage />
      },
      {
        path: "/quiz",
        element: <QuizPage />
      },
      {
        path: "/results",
        element: <ResultsPage />
      }
    ]
  }
]);
