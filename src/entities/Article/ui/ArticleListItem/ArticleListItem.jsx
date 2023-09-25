import React from "react";
import cls from "./ArticleListItem.module.css";
import Button from "../../../../shared/ui/Button/Button";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../../../shared/config/routeConfig/routeConfig";

const ArticleListItem = ({ item }) => {
  const navigate = useNavigate()
  const handleShowArticle = () => {
    console.log(item.id)
    navigate(RoutePath.article + item.id)
  };

  return (
    <li className={cls.item}>
      <p className={cls.id}>{item.id}.</p>
      <div className={cls.body}>
        <div>
          <p className={cls.title}>{item.title}</p>
          <p className={cls.text}>{item.body}</p>
        </div>
        <Button className={cls.btn} onClick={handleShowArticle}>
          Подробнее
        </Button>
      </div>
    </li>
  );
};

export default ArticleListItem;
