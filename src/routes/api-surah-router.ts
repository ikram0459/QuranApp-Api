import { Router } from "@awaitjs/express";
import core from "express-serve-static-core";

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

    let x = {
      "test": "this is returned as JSON"
    };

    res.send(x);
  }
);

export default apiRouter;
