import { BrowserRouter } from "react-router-dom";

import 'antd/dist/antd.css';

import Router from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
