import { Router } from "@awaitjs/express";
import core from "express-serve-static-core";

import { getTranslation, getTranslationByTranslator, updateTranslation } from "../controllers/translation.controller";
import { Translation } from "../interface/translation";
import { validateTranslationIdRequest, validateTranslationIdsRequest, validateTranslationRequest } from "./validation/translation-validators";

interface GenerateSingleParams extends core.ParamsDictionary {
    translation_id: string;
    surah_id: string;
    ayah_id: string;
    translator_id: string;
}

const apiRouter = Router();

apiRouter.getAsync<GenerateSingleParams>("/:surah_id/:ayah_id/:translator_id", async (req, res) => {
    const { surah_id, ayah_id, translator_id } = req.params;    
    await validateTranslationIdsRequest(surah_id, ayah_id, translator_id);
    const ayat = await getTranslationByTranslator(surah_id, ayah_id, translator_id);
    res.send(ayat);
  }
);

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
