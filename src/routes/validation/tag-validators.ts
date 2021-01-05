import { HTTP400Error } from "../../errors/errors";
import { Tag } from "../../interface/tag";

export const validateTagIdRequest = async (tag_id: string): Promise<void> => {
    const tagId: number = +tag_id;    
  
    if (tag_id === undefined || isNaN(tagId)) {
      throw new HTTP400Error(`Resources for tagId "${tagId}" does not exist`);
    }
};
export const validateTagRequest = async (tagObj: Tag): Promise<void> => {
  if (tagObj.title !== undefined && (tagObj.title == null || tagObj.title == '')) {
    throw new HTTP400Error(`Resources for title "${tagObj.title}" is not valid`);
  }
};