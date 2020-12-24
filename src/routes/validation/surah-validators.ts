import { HTTP400Error } from "../../errors/errors";

export const validateSurahSingleRequest = async (
  surahNumber: string,
  ayatNumber: string,
  translationId: string
): Promise<void> => {
  if (surahNumber === undefined) {
    throw new HTTP400Error(`Resources for surahNumber "${surahNumber}" does not exist`);
  }

  if (ayatNumber === undefined) {
    throw new HTTP400Error(`Resources for ayatNumber "${ayatNumber}" does not exist`);
  }

  // if (translationId === undefined) {
  //   throw new HTTP400Error(`Resources for translationId "${translationId}" does not exist`);
  // }
};
