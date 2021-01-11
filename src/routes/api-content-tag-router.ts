import { Router } from "@awaitjs/express";
import core from "express-serve-static-core";

import { getAyahsByTag, getTagsByAyah, updateContentTag } from "../controllers/contenttag.controller";
import { ContentTag } from "../interface/contentTag";
import { validateContentTagIdRequest, validateTagIdRequest } from "./validation/contenttag-validators";


interface GenerateSingleParams extends core.ParamsDictionary {
    tag_id: string;
}

const apiRouter = Router();

apiRouter.getAsync<GenerateSingleParams>("/ayahstag/:tag_id", async (req, res) => {
    const { tag_id } = req.params;    
    await validateTagIdRequest(tag_id);
    const ayat = await getAyahsByTag(tag_id);
    res.send(ayat);
  }
);

apiRouter.getAsync<GenerateSingleParams>("/tagsayah/:ayah_translation_id", async (req, res) => {
    const { ayah_translation_id } = req.params;    
    await validateContentTagIdRequest(ayah_translation_id);
    const ayat = await getTagsByAyah(ayah_translation_id);
    res.send(ayat);
  }
);

apiRouter.postAsync<ContentTag>("/", async (req, res) => {
  const response = await updateContentTag(req.body);
  res.send({status: true, message: response});
});

export default apiRouter;
