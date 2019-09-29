import React from 'react';

export const Error = ({ message }) => <div className='has-error'>
  <div className='ant-form-explain'>
    {message}
  </div>
</div>;