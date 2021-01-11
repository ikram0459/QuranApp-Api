import { HTTP400Error } from "../../errors/errors";

export const validateContentTagIdRequest = async (content_tag_id: string): Promise<void> => {
    const contentTagId: number = +content_tag_id;    
  
    if (content_tag_id === undefined || isNaN(contentTagId)) {
      throw new HTTP400Error(`Resources for contentTagId "${contentTagId}" does not exist`);
    }
};
export const validateTagIdRequest = async (tag_id: string): Promise<void> => {
    const tagId: number = +tag_id;    
  
    if (tag_id === undefined || isNaN(tagId)) {
      throw new HTTP400Error(`Resources for tagId "${tagId}" does not exist`);
    }
};
export const validateAyahIdRequest = async (ayah_id: string): Promise<void> => {
    const ayahId: number = +ayah_id;    
  
    if (ayah_id === undefined || isNaN(ayahId)) {
      throw new HTTP400Error(`Resources for ayahId "${ayahId}" does not exist`);
    }
};