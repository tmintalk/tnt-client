import { BrowserRouter } from "react-router-dom";
import { Provider as StoreProvider } from 'react-redux';

import 'antd/dist/antd.css';

import Router from "./router";
import store from "./store";

const App = () => {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
