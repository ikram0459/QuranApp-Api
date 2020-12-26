import { Router } from "@awaitjs/express";
import core from "express-serve-static-core";

import { getAyat } from "../controllers/quran.controller";
import { validateSurahSingleRequest } from "./validation/surah-validators";

interface GenerateSingleParams extends core.ParamsDictionary {
  surahNumber: string;
  ayatNumber: string;
  translationId: string;
}

const apiRouter = Router();

apiRouter.getAsync<GenerateSingleParams>(
  "/:surahNumber/:ayatNumber",
  async (req, res) => {
    const { surahNumber, ayatNumber, translationId } = req.params;
    
    await validateSurahSingleRequest(surahNumber, ayatNumber, translationId);

    const ayat = await getAyat(surahNumber, ayatNumber, translationId);

    // let x = {
    //   "test": "this is returned as JSON",
    //   "url": req.url,
    //   "date": new Date().getTime()
    // };

    res.send(ayat);
  }
);

export default apiRouter;
