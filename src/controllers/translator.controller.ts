import { connect } from '../config/mysqldb';
import { HTTP400Error } from '../errors/errors';
import { Translator } from '../interface/translator';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getTranslator(ayahTranslatorId: string) {    
     const conn = await connect();
     const translator = await conn.query('SELECT * FROM ayah_translator where ayah_translator_id = '+ayahTranslatorId);
     return translator[0];
}

export async function updateTranslator(translatorObj: Translator): Promise<string> {
     try {
          const conn = await connect();
          let query = ``;
          let msg = 'row inserted!';
          if(translatorObj.ayah_translator_id == undefined || translatorObj.ayah_translator_id == null) {
            query = `insert into ayah_translator (ayah_translator_name, ayah_translator_detail) values ('${translatorObj.ayah_translator_name}', '${translatorObj.ayah_translator_detail}')`;
          }
          else {
            query = `update ayah_translator set ayah_translator_name = '${translatorObj.ayah_translator_name}'`;
            if(translatorObj.ayah_translator_detail != undefined){
                query += `,ayah_translator_detail = '${translatorObj.ayah_translator_detail}'`
            }
            query += ` where ayah_translator_id = ${translatorObj.ayah_translator_id}`;
            msg = 'row updated!';
          }
          
          await conn.query(query);
          return msg;
     } catch (error) {
          throw new HTTP400Error(`Problem while updating translator = "${translatorObj.ayah_translator_id}" in db!!!`);
     }     
}