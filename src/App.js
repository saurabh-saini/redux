import React from "react";
import LoginForm from "./components/LoginForm";
import { Provider } from "react-redux";
import store from "./redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      <>
        <LoginForm />
      </>
    </Provider>
  );
};

export default App;
