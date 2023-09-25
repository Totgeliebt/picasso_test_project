import { configureStore } from '@reduxjs/toolkit'
import {articleListApi} from "../../../entities/Article/api/fetchArticlesList";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [articleListApi.reducerPath]: articleListApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleListApi.middleware),
})
setupListeners(store.dispatch)
