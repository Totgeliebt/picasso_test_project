import {rtkApi} from "../../../shared/api/rtkApi";
export const articleListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleList: build.query({
      query: (page) => `posts?_page=${page}_limit=10`,
    }),
  }),
});
export const {useGetArticleListQuery} = articleListApi
