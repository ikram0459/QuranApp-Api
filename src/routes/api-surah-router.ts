import { Router } from "@awaitjs/express";
import core from "express-serve-static-core";

import { getAyahWord, getAyat, getAyatRange, updateAyahWord } from "../controllers/surahayah.controller";
import { ayatWord } from "../interface/ayatWord";
import { validateSurahAyahRequest, validateSurahAyahsRequest, validateSurahAyahWordIdRequest, validateSurahAyahWordRequest } from "./validation/surah-validators";

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

apiRouter.getAsync<GenerateSingleParams>("/:surahNumber/:ayahNumber1-:ayahNumber2", async (req, res) => {
  const { surahNumber, ayahNumber1, ayahNumber2 } = req.params;    
  await validateSurahAyahsRequest(surahNumber, ayahNumber1, ayahNumber2);
  const ayat = await getAyatRange(surahNumber, ayahNumber1, ayahNumber2);
  res.send(ayat);
});

apiRouter.getAsync<GenerateSingleParams>("/:surahNumber/:ayahNumber", async (req, res) => {
  const { surahNumber, ayahNumber } = req.params;    
  await validateSurahAyahRequest(surahNumber, ayahNumber);
  const ayat = await getAyat(surahNumber, ayahNumber);
  res.send(ayat);
});

apiRouter.getAsync<GenerateSingleParams>("/:surahNumber", async (req, res) => {
  const { surahNumber } = req.params;    
  const ayahNumber = '1';
  await validateSurahAyahRequest(surahNumber, ayahNumber);
  const ayat = await getAyatRange(surahNumber, ayahNumber, '6');
  res.send(ayat);
});

export default apiRouter;
