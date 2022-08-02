import * as React from 'react';
import {
  useRoutes
} from "react-router-dom";
import './App.css';

import Layout from './pages';
import routes from './routes';

function App() {
  const element = useRoutes(routes);

  return (
    <React.Suspense fallback={'加载中...'}>
    <div className="App"> 
    <Layout/>
      {element}
  </div>
  </React.Suspense>
  );
}

export default App;

