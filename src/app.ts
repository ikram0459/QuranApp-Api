import { addAsync } from "@awaitjs/express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { httpLogger } from "./config/http-logger";
import { logger } from "./config/logger";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import apiContentTagRouter from "./routes/api-content-tag-router";
import apiSurahRouter from "./routes/api-surah-router";
import apiTagRouter from "./routes/api-tag-router";
import apiTranslationRouter from "./routes/api-translation-router";
import apiTranslatorRouter from "./routes/api-translator-router";

const startServer = async () => {
  const app = addAsync(express());
  const port = process.env.PORT || 3001;

  app.use(cors({ origin: true }));
  app.use(httpLogger);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/tagcontent/", apiContentTagRouter);
  app.use("/tag/", apiTagRouter);
  app.use("/translator/", apiTranslatorRouter);
  app.use("/translation/", apiTranslationRouter);
  app.use("/", apiSurahRouter);

  app.use(errorHandlerMiddleware());

  app.listen(port, () => {
    logger.info(`Started listening on ${port}`);
  });
};

process.on("uncaughtException", (error) => console.error("Uncaught exception: ", error));
process.on("unhandledRejection", (error) => console.error("Unhandled rejection: ", error));
startServer();
