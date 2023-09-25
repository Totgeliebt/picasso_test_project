import { MainPage } from "../../../pages/MainPage";
import { ArticlePage } from "../../../pages/ArticlePage";
import {NotFoundPage} from "../../../pages/NotFoundPage";


export const AppRoutes = {
  MAIN: "main",
  ARTICLE: "article",
  NOT_FOUND: "not_found",
};
export const RoutePath = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ARTICLE]: "/article/",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ARTICLE]: {
    path: `${RoutePath.article}:id`,
    element: <ArticlePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
