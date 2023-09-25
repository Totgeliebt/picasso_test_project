import React from 'react';
import cls from './PageLoader.module.css'

const PageLoader = () => {
  return (
    <div className={cls.lds_ellipsis}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default PageLoader;
