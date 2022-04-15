import "dotenv/config";
import express from 'express';
import morgan from 'morgan';
import { client } from './client';
import employeeRouter from './router/employeeRouter';
import mainRouter from './router/mainRouter';
import supplyRouter from './router/supplyRouter';

const app = express();

/*
 * 프론트에서 fetch body에 정보를 JSON.stringify하여 쏘면 
 * 서버에서는 이를 JSON.parse하여 받음
*/
app.use(express.json());

app.use(morgan("dev"));
app.use("/static", express.static("assets"))
app.use("/", mainRouter);
app.use("/employee", employeeRouter);
app.use("/supply", supplyRouter);

const PORT = process.env.PORT;

client.connect((error) => {
    console.error(error ? error : `DB Connected!`)
})
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));