import { Router } from "@awaitjs/express";
import core from "express-serve-static-core";

import { getAllTags, getTag, updateTag } from "../controllers/tag.controller";
import { Tag } from "../interface/tag";
import { validateTagIdRequest, validateTagRequest } from "./validation/tag-validators";


interface GenerateSingleParams extends core.ParamsDictionary {
    tag_id: string;
}

const apiRouter = Router();

apiRouter.getAsync<GenerateSingleParams>("/:tag_id", async (req, res) => {
    const { tag_id } = req.params;    
    await validateTagIdRequest(tag_id);
    const ayat = await getTag(tag_id);
    res.send(ayat);
  }
);

apiRouter.getAsync("/", async (req, res) => {
  const ayat = await getAllTags();
  res.send(ayat);
});

apiRouter.postAsync<Tag>("/", async (req, res) => {
  await validateTagRequest(req.body);
  const response = await updateTag(req.body);
  res.send({status: true, message: response});
});

export default apiRouter;
