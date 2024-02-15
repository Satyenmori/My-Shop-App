import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  
  return (
    <></>
  );
}

export default Counter;