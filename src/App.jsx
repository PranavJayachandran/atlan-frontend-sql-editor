import { Suspense, lazy, useMemo, useState } from "react";
import "./App.css";
import { MyContext } from "./context/context";
import { get_default_query } from "./utils/data";

const Editor = lazy(() => import("./pages/Editor"));
function App() {
  const [currentQuery, setCurrentQuery] = useState(get_default_query());
  const [output, setOutput] = useState("");
  const [historyQueries, setHistoryQueries] = useState([]);
  const context = useMemo(
    () => ({
      currentQuery,
      setCurrentQuery,
      historyQueries,
      setHistoryQueries,
      output,
      setOutput,
    }),
    [currentQuery, historyQueries, output]
  );
  return (
    <MyContext.Provider value={context}>
      <Suspense fallback={<div>Loading ...</div>}>
        <Editor />
      </Suspense>
    </MyContext.Provider>
  );
}

export default App;
