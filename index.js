/* eslint-disable no-template-curly-in-string */
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const TreesContext = createContext();

const trees = [
  { id: "1", type: "Maple"},
  { id: "1", type: "Oak"},
  { id: "1", type: "Cedar"},
  { id: "1", type: "Pine"}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
);
document.getElementById("root");

