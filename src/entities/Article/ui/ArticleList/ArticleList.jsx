import React, { useEffect, useState} from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import { useGetArticleListQuery } from "../../api/fetchArticlesList";
import PageLoader from "../../../../shared/ui/PageLoader/PageLoader";
import { Virtuoso } from 'react-virtuoso'

export const ArticleList = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(()=>[]);
  const { data, isFetching } = useGetArticleListQuery(page);

  const fetchMore = () => {
    if (!isFetching) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (data) {
      setPosts((prevValue) => [...prevValue, ...data]);
    }
  }, [data]);
  return (
    <>
      <h1>Список статей</h1>
      <Virtuoso
        style={{ height: 850}}
        data={posts}
        endReached={fetchMore}
        overscan={200}
        itemContent={(index, item) => {
          return <ArticleListItem item={item} key={item.id} />
        }}
        components={ PageLoader }
      />
    </>
  );
};

