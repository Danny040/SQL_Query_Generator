import { useState, useEffect } from "react";
import style from "./App.module.css";
import sqlLogo from "./assets/sql_logo.png";

function App() {
  const [queryDescription, setQueryDescription] = useState("");
  const submitFun = (event) => {
    event.preventDefault();
    console.log("Form has been submited: ", queryDescription);
  };
  // useEffect(() => {
  //   console.log(queryDescription);
  // }, [queryDescription]);
  return (
    <main className={style.main}>
      <img src={sqlLogo} className={style.icon} />
      <h3>SQL Query Generator</h3>
      <h5>Powered by AI</h5>
      <form onSubmit={submitFun}>
        <input
          type="text"
          name="query-description"
          placeholder="Describe your query..."
          onChange={(event) => setQueryDescription(event.target.value)}
        />
        <input type="submit" value="Generate query" />
      </form>
    </main>
  );
}

export default App;
