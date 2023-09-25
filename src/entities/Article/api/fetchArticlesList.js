import {rtkApi} from "../../../shared/api/rtkApi";
export const articleListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleList: build.query({
      query: (page) => `posts?_page=${page}`,
    }),
  }),
});
export const {useGetArticleListQuery} = articleListApi
