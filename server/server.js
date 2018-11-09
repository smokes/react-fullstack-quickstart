import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import os from "os";

const app = express();
const osUsername = os.userInfo().username;
const config = dotenv.load();
const server = app.listen(process.env.EXPRESS_PORT, () => console.log(`Started Express.js server on port ${server.address().port}`));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :remote-addr'));
app.use(helmet());

app.get("/api/username" , (req , res) => {
    res.status(200).json({username : osUsername});
})
