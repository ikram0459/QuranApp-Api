import { HTTP400Error } from "../../errors/errors";
import { Translation } from "../../interface/translation";

export const validateTranslationIdRequest = async (translation_id: string): Promise<void> => {
    const translationId: number = +translation_id;    
  
    if (translation_id === undefined || isNaN(translationId)) {
      throw new HTTP400Error(`Resources for translationId "${translationId}" does not exist`);
    }
};
export const validateTranslationRequest = async (translationObj: Translation): Promise<void> => {
  if (translationObj.ayah_translation !== undefined && (translationObj.ayah_translation == null || translationObj.ayah_translation == '')) {
    throw new HTTP400Error(`Resources for ayah_translation "${translationObj.ayah_translation}" is not valid`);
  }
};