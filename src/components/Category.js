import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const checkStatusHandler = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button type="button" onClick={checkStatusHandler}>Check Status</button>
    </div>
  );
};

export default Category;
