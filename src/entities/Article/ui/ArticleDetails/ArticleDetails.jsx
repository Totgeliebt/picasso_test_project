import React from "react";
import cls from "./ArticleDetails.module.css";
import Button from "../../../../shared/ui/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { RoutePath } from "../../../../shared/config/routeConfig/routeConfig";
import { useGetArticleByIdQuery } from "../../api/fetchArticleById";

export const ArticleDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const handleBackToList = () => {
    navigate(RoutePath.main);
  };
  const { data } = useGetArticleByIdQuery(id);
  console.log(data);
  return (
    <div className={cls.pageWrapper}>
      <div className={cls.header}>
        <Button onClick={handleBackToList}>Назад</Button>
        <h1>This is an article with id {data?.id}</h1>
      </div>
      <h3 className={cls.title}>{data?.title}</h3>
      <p className={cls.text}>{data?.body}</p>
    </div>
  );
};

