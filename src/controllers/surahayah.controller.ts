import { connect } from '../config/mysqldb';
import { HTTP400Error } from '../errors/errors';
import { ayatWord } from '../interface/ayatWord';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getAyat(surahNumber: string, ayatNumber: string) {    
     const conn = await connect();
     const ayat = await conn.query('select * FROM word_data w where w.word_surah = '+surahNumber+' and w.word_ayah = '+ayatNumber);
     return ayat[0];
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getAyahWord(wordId: string) {    
     const conn = await connect();
     const ayat = await conn.query('select * FROM word_data w where w.word_id = '+wordId);
     return ayat[0];
}

export async function updateAyahWord(ayatObj: ayatWord): Promise<string> {
     try {
          const conn = await connect();
          let query = `update word_data set word_translation = '${ayatObj.word_translation}'`;
          if(ayatObj.word_transliteration != undefined)
               query += `,word_transliteration = '${ayatObj.word_transliteration}'`
          if(ayatObj.word_translation_urdu1 != undefined)
               query += `,word_translation_urdu1 = '${ayatObj.word_translation_urdu1}'`
          if(ayatObj.word_arabic_indopak != undefined)
               query += `,word_arabic_indopak = '${ayatObj.word_arabic_indopak}'`
          if(ayatObj.word_arabic_uthmani != undefined)
               query += `,word_arabic_uthmani = '${ayatObj.word_arabic_uthmani}'`
          if(ayatObj.word_root != undefined)
               query += `,word_root = '${ayatObj.word_root}'`
          query += ` where word_id = ${ayatObj.word_id}`;
          await conn.query(query);
          return "row updated!";
     } catch (error) {
          throw new HTTP400Error(`Problem while updating word_id = "${ayatObj.word_id}" in db!!!`);
     }     
}