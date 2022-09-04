import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import AppMain from "./components/AppMain/AppMain";
import data from "./utils/data";

function App() {
  return (
    <>
      <AppHeader />
      <AppMain data={data} />
    </>
  );
}

export default App;
