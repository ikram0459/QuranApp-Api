import { Router } from "@awaitjs/express";
import core from "express-serve-static-core";
import { getAyat, updateAyahWord } from "../controllers/surahayah.controller";
import { ayatWord } from "../interface/ayatWord";
import { validateSurahAyahRequest, validateSurahAyahWordRequest } from "./validation/surah-validators";

interface GenerateSingleParams extends core.ParamsDictionary {
  surahNumber: string;
  ayahNumber: string;
  word_id: string;
}

const apiRouter = Router();

apiRouter.getAsync<GenerateSingleParams>("/:surahNumber/:ayahNumber", async (req, res) => {
    const { surahNumber, ayahNumber } = req.params;    
    await validateSurahAyahRequest(surahNumber, ayahNumber);
    const ayat = await getAyat(surahNumber, ayahNumber);
    res.send(ayat);
  }
);

apiRouter.postAsync<ayatWord>("/ayahword/", async (req, res) => {
  await validateSurahAyahWordRequest(req.body);
  const response = await updateAyahWord(req.body);
  res.send({status: true, message: response});
});

export default apiRouter;
