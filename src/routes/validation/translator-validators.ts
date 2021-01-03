import { HTTP400Error } from "../../errors/errors";
import { Translator } from "../../interface/translator";

export const validateTranslatorIdRequest = async (translator_id: string): Promise<void> => {
    const translatorId: number = +translator_id;    
  
    if (translator_id === undefined || isNaN(translatorId)) {
      throw new HTTP400Error(`Resources for translatorId "${translatorId}" does not exist`);
    }
};
export const validateTranslatorRequest = async (translatorObj: Translator): Promise<void> => {
  if (translatorObj.ayah_translator_name !== undefined && (translatorObj.ayah_translator_name == null || translatorObj.ayah_translator_name == '')) {
    throw new HTTP400Error(`Resources for ayah_translator_name "${translatorObj.ayah_translator_name}" is not valid`);
  }
};