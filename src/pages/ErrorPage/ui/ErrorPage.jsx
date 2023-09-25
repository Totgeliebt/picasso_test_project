import cls from './ErrorPage.module.css'
import Button from "../../../shared/ui/Button/Button";

export const ErrorPage = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className={cls.error}>
      <p>Произошла непредвиденная ошибка</p>
      <Button onClick={reloadPage}>Обновить страницу</Button>
    </div>
  );
};
