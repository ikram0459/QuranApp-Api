import { connect } from '../config/mysqldb';
import { HTTP400Error } from '../errors/errors';
import { ayatWord } from '../interface/ayatWord';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getAyat(surahNumber: string, ayahNumber: string) {    
     const conn = await connect();
     const ayat = await conn.query('select * FROM word_data w where w.word_surah = '+surahNumber+' and w.word_ayah = '+ayahNumber);
     return ayat[0];
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getAyatRange(surahNumber: string, ayahNumber1: string, ayahNumber2: string) {    
     const ayah1 = +ayahNumber1;
     const ayah2 = +ayahNumber2;
     const diff = ayah2 - ayah1;
     let range = 0;
     let rangeString = ``;

     if (diff > 10)
          range = 5;
     else
          range = diff;

     for (let i = ayah1; i <= (ayah1+range); i++) {
          rangeString += `'${i}',`;
     }
     rangeString = rangeString.substring(0, rangeString.length-1);
     const conn = await connect();
     const ayat = await conn.query(`select * FROM word_data w where w.word_surah = '${surahNumber}' and w.word_ayah in (${rangeString})`);
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
          if(ayatObj.word_arabic_indopak != undefined)
               query += `,word_arabic_indopak = '${ayatObj.word_arabic_indopak}'`
          if(ayatObj.word_arabic_uthmani != undefined)
               query += `,word_arabic_uthmani = '${ayatObj.word_arabic_uthmani}'`
          if(ayatObj.word_root != undefined)
               query += `,word_root = '${ayatObj.word_root}'`
          if(ayatObj.word_end != undefined)
               query += `,word_end = ${ayatObj.word_end}`
          if(ayatObj.word_translation_urdu_fhashmi != undefined)
               query += `,word_translation_urdu_fhashmi = '${ayatObj.word_translation_urdu_fhashmi}'`
          if(ayatObj.word_translation_urdu_nhashmi != undefined)
               query += `,word_translation_urdu_nhashmi = '${ayatObj.word_translation_urdu_nhashmi}'`    
          if(ayatObj.word_translation_urdu_iipc != undefined)
               query += `,word_translation_urdu_iipc = '${ayatObj.word_translation_urdu_iipc}'`    
          if(ayatObj.word_translation_hindi != undefined)
               query += `,word_translation_hindi = '${ayatObj.word_translation_hindi}'`    
          if(ayatObj.word_translation_indonesian != undefined)
               query += `,word_translation_indonesian = '${ayatObj.word_translation_indonesian}'`    
          if(ayatObj.word_translation_bangla != undefined)
               query += `,word_translation_bangla = '${ayatObj.word_translation_bangla}'`    
          if(ayatObj.word_translation_turkish != undefined)
               query += `,word_translation_turkish = '${ayatObj.word_translation_turkish}'`    
          if(ayatObj.word_translation_german != undefined)
               query += `,word_translation_german = '${ayatObj.word_translation_german}'`    
          if(ayatObj.word_translation_russian != undefined)
               query += `,word_translation_russian = '${ayatObj.word_translation_russian}'`    
          if(ayatObj.word_translation_ingush != undefined)
               query += `,word_translation_ingush = '${ayatObj.word_translation_ingush}'`    
          if(ayatObj.word_translation_en_iipc != undefined)
               query += `,word_translation_en_iipc = '${ayatObj.word_translation_en_iipc}'` 
         
               query += ` where word_id = ${ayatObj.word_id}`;
          await conn.query(query);
          return "row updated!";
     } catch (error) {
          throw new HTTP400Error(`Problem while updating word_id = "${ayatObj.word_id}" in db!!!`);
     }     
}