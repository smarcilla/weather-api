import * as http from "node:http";
import { app } from "./app.js";

const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Weather API is running at http://localhost:${port}`);
});
