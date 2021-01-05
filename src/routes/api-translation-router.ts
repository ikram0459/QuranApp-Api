import { Router } from "@awaitjs/express";
import core from "express-serve-static-core";

import { getTranslation, updateTranslation } from "../controllers/translation.controller";
import { Translation } from "../interface/translation";
import { validateTranslationIdRequest, validateTranslationRequest } from "./validation/translation-validators";

interface GenerateSingleParams extends core.ParamsDictionary {
    translation_id: string;
}

const apiRouter = Router();

apiRouter.getAsync<GenerateSingleParams>("/:translation_id", async (req, res) => {
    const { translation_id } = req.params;    
    await validateTranslationIdRequest(translation_id);
    const ayat = await getTranslation(translation_id);
    res.send(ayat);
  }
);

apiRouter.postAsync<Translation>("/", async (req, res) => {
  await validateTranslationRequest(req.body);
  const response = await updateTranslation(req.body);
  res.send({status: true, message: response});
});

export default apiRouter;
