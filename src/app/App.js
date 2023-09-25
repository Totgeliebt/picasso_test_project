import React, { Suspense } from 'react';
import './styles/App.css';
import AppRouter from "./providers/router/ui/AppRouter";
import PageLoader from "../shared/ui/PageLoader/PageLoader";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<PageLoader/>}>
        <AppRouter/>
      </Suspense>
    </div>
  );
}

export default App;
