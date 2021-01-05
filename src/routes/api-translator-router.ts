import { Router } from "@awaitjs/express";
import core from "express-serve-static-core";

import { getAllTranslators, getTranslator, updateTranslator } from "../controllers/translator.controller";
import { Translator } from "../interface/translator";
import { validateTranslatorIdRequest, validateTranslatorRequest } from "./validation/translator-validators";

interface GenerateSingleParams extends core.ParamsDictionary {
    translator_name: string;
    translator_detail: string;
    translator_id: string;
}

const apiRouter = Router();

apiRouter.getAsync<GenerateSingleParams>("/:translator_id", async (req, res) => {
    const { translator_id } = req.params;    
    await validateTranslatorIdRequest(translator_id);
    const ayat = await getTranslator(translator_id);
    res.send(ayat);
  }
);

apiRouter.getAsync("/", async (req, res) => {
  const ayat = await getAllTranslators();
  res.send(ayat);
});

apiRouter.postAsync<Translator>("/", async (req, res) => {
  await validateTranslatorRequest(req.body);
  const response = await updateTranslator(req.body);
  res.send({status: true, message: response});
});

export default apiRouter;
