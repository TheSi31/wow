// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Dom } from './component/Dom';

const App: React.FC = () => {
  return <div>
          <h1>Hello, React with TypeScript and Webpack!</h1>
          <Dom children={"Hello"}></Dom>
        </div>
};

ReactDOM.render(<App />, document.getElementById('root'));