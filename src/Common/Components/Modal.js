import React from 'react';
import { Modal as Antd } from 'antd';

// wrapper component to change any time;

export const Modal = ({ children, ...rest }) => {
  console.log('rest',rest)
  return <Antd {...rest}>
    {children}
  </Antd>
}