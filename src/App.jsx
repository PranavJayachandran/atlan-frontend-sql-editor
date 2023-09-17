import { Suspense, lazy, useMemo, useState } from "react";
import "./App.css";
import { MyContext } from "./context/context";
import { get_default_query } from "./utils/data";

const Editor = lazy(() => import("./pages/Editor"));
function App() {
  const [currentQuery, setCurrentQuery] = useState(get_default_query());
  const [output, setOutput] = useState("");
  const [historyQueries, setHistoryQueries] = useState([]);
  const [dark, setDark] = useState(false);
  const context = {
    currentQuery,
    setCurrentQuery,
    historyQueries,
    setHistoryQueries,
    output,
    setOutput,
    dark,
    setDark,
  };
  return (
    <MyContext.Provider value={context}>
      <Suspense fallback={<div>Loading ...</div>}>
        <Editor />
      </Suspense>
    </MyContext.Provider>
  );
}

export default App;
