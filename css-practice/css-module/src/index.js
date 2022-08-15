import React from 'react';
import ReactDOM from 'react-dom/client';
import Box from './Box';
import Button from './Button';
import ButtonCn from './Button-cn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <ButtonCn size="big" />
      <ButtonCn size="small" />
      <Button size="big" />
      <Button size="small" />
      <Box size="big" />
      <Box size="small" />
    </div>
  </React.StrictMode>
);
