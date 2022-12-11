import React from 'react';
import ReactDOM from 'react-dom/client';
import { Top } from "./page/top"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Top title={"TITLE"}></Top>

      <span>test11111</span>
  </React.StrictMode>
);

