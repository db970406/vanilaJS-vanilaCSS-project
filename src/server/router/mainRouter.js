import express from "express";
import { getHomeHtmlController } from '../controller/mainController';

const mainRouter = express.Router();

mainRouter.get("/", getHomeHtmlController);

export default mainRouter;