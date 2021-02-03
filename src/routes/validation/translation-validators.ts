import { HTTP400Error } from "../../errors/errors";
import { Translation } from "../../interface/translation";

export const validateTranslationIdRequest = async (translation_id: string): Promise<void> => {
    const translationId: number = +translation_id;    
  
    if (translation_id === undefined || isNaN(translationId)) {
      throw new HTTP400Error(`Resources for translationId "${translationId}" does not exist`);
    }
};

export const validateTranslationIdsRequest = async (surah_id: string, ayah_id: string, translator_id: string): Promise<void> => {
  const surahId: number = +surah_id;
  const ayahId: number = +ayah_id;
  const translatorId: number = +translator_id;

  if (surah_id === undefined || isNaN(surahId)) {
    throw new HTTP400Error(`Resources for surahId "${surahId}" does not exist`);
  }
  if (ayah_id === undefined || isNaN(ayahId)) {
    throw new HTTP400Error(`Resources for ayahId "${ayahId}" does not exist`);
  }
  if (translator_id === undefined || isNaN(translatorId)) {
    throw new HTTP400Error(`Resources for translationId "${translatorId}" does not exist`);
  }
};

export const validateTranslationRequest = async (translationObj: Translation): Promise<void> => {
  if (translationObj.ayah_translation !== undefined && (translationObj.ayah_translation == null || translationObj.ayah_translation == '')) {
    throw new HTTP400Error(`Resources for ayah_translation "${translationObj.ayah_translation}" is not valid`);
  }
};