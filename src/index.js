import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./app/providers/ErrorBoundary/ui/ErrorBoundary";
import App from "./app/App";
import { Provider } from "react-redux";
import { store } from "./app/providers/StoreProvider/store";

render(
  <BrowserRouter>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
);
