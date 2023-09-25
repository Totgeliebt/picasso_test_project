import {rtkApi} from "../../../shared/api/rtkApi";
export const articleApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleById: build.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});
export const {useGetArticleByIdQuery} = articleApi
