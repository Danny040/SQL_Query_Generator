import { useState, useEffect } from "react";
import style from "./App.module.css";
import sqlLogo from "./assets/sql_logo.png";

function App() {
  const [queryDescription, setQueryDescription] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");

  const submitFun = async (event) => {
    event.preventDefault();
    const generatedQuery = await generateQuery();
    setSqlQuery(generatedQuery);
  };

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: queryDescription }),
    });
    const data = await response.json();
    return prettifyReturn(data.response);
  };

  const prettifyReturn = (initialString) => {
    let modification1 = initialString.substring(6);
    let endOfSubstring = modification1.indexOf("`");
    let modification2 = modification1.substring(0, endOfSubstring);
    return modification2;
  };

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
      <pre>{sqlQuery}</pre>
    </main>
  );
}

export default App;
