import { HTTP400Error } from "../../errors/errors";
import { ayatWord } from "../../interface/ayatWord";

export const validateSurahAyahRequest = async (surahNumber: string, ayahNumber: string): Promise<void> => {
  const surah: number = +surahNumber;
  const ayah: number = +ayahNumber;
  

  if (surahNumber === undefined || (surah > 114 && surah < 1) || isNaN(surah)) {
    throw new HTTP400Error(`Resources for surahNumber "${surahNumber}" does not exist`);
  }

  if (ayahNumber === undefined || (ayah > 286 && ayah < 1) || isNaN(ayah)) {
    throw new HTTP400Error(`Resources for ayahNumber "${ayahNumber}" does not exist`);
  }
};

export const validateSurahAyahWordIdRequest = async (wordId: string): Promise<void> => {
  const word: number = +wordId;
  
  if (wordId === undefined || isNaN(word)) {
    throw new HTTP400Error(`Resources for wordId "${word}" does not exist`);
  }
};

export const validateSurahAyahWordRequest = async (ayatObj: ayatWord): Promise<void> => {
  if (ayatObj.word_id === undefined || ayatObj.word_id < 1 || isNaN(ayatObj.word_id)) {
    throw new HTTP400Error(`Resources for wordid "${ayatObj.word_id}" is not valid`);
  }
  if (ayatObj.word_translation !== undefined && (ayatObj.word_translation == null || ayatObj.word_translation == '')) {
    throw new HTTP400Error(`Resources for word_translation "${ayatObj.word_translation}" is not valid`);
  }
  if (ayatObj.word_translation_urdu1 === undefined && (ayatObj.word_translation_urdu1 == null || ayatObj.word_translation_urdu1 == '')) {
    throw new HTTP400Error(`Resources for word_translation urdu "${ayatObj.word_translation_urdu1}" is not valid`);
  }
  if (ayatObj.word_transliteration === undefined || ayatObj.word_transliteration == null || ayatObj.word_transliteration == '') {
    throw new HTTP400Error(`Resources for word_transliteration "${ayatObj.word_transliteration}" is not valid`);
  }  
};