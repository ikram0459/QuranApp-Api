import { Router } from "@awaitjs/express";
import core from "express-serve-static-core";

import { getAyahWord, getAyat, updateAyahWord } from "../controllers/surahayah.controller";
import { ayatWord } from "../interface/ayatWord";
import { validateSurahAyahRequest, validateSurahAyahWordIdRequest, validateSurahAyahWordRequest } from "./validation/surah-validators";

interface GenerateSingleParams extends core.ParamsDictionary {
  surahNumber: string;
  ayahNumber: string;
  word_id: string;
}

const apiRouter = Router();

apiRouter.getAsync<GenerateSingleParams>("/ayahword/:word_id", async (req, res) => {
    const { word_id } = req.params;    
    await validateSurahAyahWordIdRequest(word_id);
    const ayat = await getAyahWord(word_id);
    res.send(ayat);
  }
);

apiRouter.postAsync<ayatWord>("/ayahword/", async (req, res) => {
  await validateSurahAyahWordRequest(req.body);
  const response = await updateAyahWord(req.body);
  res.send({status: true, message: response});
});

apiRouter.getAsync<GenerateSingleParams>("/:surahNumber/:ayahNumber", async (req, res) => {
  const { surahNumber, ayahNumber } = req.params;    
  await validateSurahAyahRequest(surahNumber, ayahNumber);
  const ayat = await getAyat(surahNumber, ayahNumber);
  res.send(ayat);
});

export default apiRouter;
