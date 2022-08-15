import React from 'react';
import ReactDOM from 'react-dom/client';
import Box from './Box';
import Button from './Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Button size="big" />
      <Button size="small" />
      <Box size="big" />
      <Box size="small" />
    </div>
  </React.StrictMode>
);
