import { connect } from '../config/mysqldb';
import { HTTP400Error } from '../errors/errors';
import { Translation } from '../interface/translation';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getTranslation(ayahTranslationId: string) {    
     const conn = await connect();
     const translation = await conn.query('SELECT * FROM ayah_translation where ayah_translation_id = '+ayahTranslationId);
     return translation[0];
}

export async function updateTranslation(translationObj: Translation): Promise<string> {
     try {
          const conn = await connect();
          let query = ``;
          let msg = 'row inserted!';
          if(translationObj.ayah_translation_id == undefined || translationObj.ayah_translation_id == null) {
            query = `insert into ayah_translation (ayah_translator_id, word_surah, word_ayah, culture_code, ayah_translation) 
                values (${translationObj.ayah_translator_id}, ${translationObj.word_surah}, ${translationObj.word_ayah}, '${translationObj.culture_code}', '${translationObj.ayah_translation}')`;
          }
          else {
            query = `update ayah_translation set ayah_translator_id = '${translationObj.ayah_translator_id}', ayah_translation = '${translationObj.ayah_translation}'`;
            if(translationObj.culture_code != undefined){
                query += `,culture_code = '${translationObj.culture_code}'`
            }
            query += ` where ayah_translation_id = ${translationObj.ayah_translation_id} and word_surah = ${translationObj.word_surah} and word_ayah = ${translationObj.word_ayah}`;
            msg = 'row updated!';
          }
          
          await conn.query(query);
          return msg;
     } catch (error) {
          throw new HTTP400Error(`Problem while updating translation = "${translationObj.ayah_translation_id}" in db!!!`);
     }     
}