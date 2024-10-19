// a client talks to this file first and it is goint to talk to open ai client
import express from "express";
import cors from "cors";
import generate from "./generate.js";

const app = express();

// app.use uses middleware
app.use(express.json()); // allows to process ruequest body
app.use(
  cors({
    // origin: ip
  })
); // origin: ip where frontend is anaible cross origin http

const port = process.env.PORT || 3005;

// end points bellow
app.get("/", (req, res) => {
  res.send("The server is on the air!!!");
});

app.post("/generate", async (req, res) => {
  const queryDescription = req.body.queryDescription;
  try {
    const sqlQuery = await generate(queryDescription);
    res.json({ response: sqlQuery });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
