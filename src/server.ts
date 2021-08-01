import express from "express";
import { firstRoute } from "./routes/firstRoute";
// import 'dotenv/config';
// const PORT = process.env.APP_PORT;

const app = express();

app.get("/", firstRoute);

app.listen(3333, () => {
  console.log(`O SERVIDOR ESTÁ RODANDO NA PORTA 3333`);
});
