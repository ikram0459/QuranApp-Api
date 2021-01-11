import { connect } from '../config/mysqldb';
import { HTTP400Error } from '../errors/errors';
import { ContentTag } from '../interface/contentTag';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getContentTag(contentTagId: string) {    
     const conn = await connect();
     const contentTag = await conn.query('SELECT * FROM content_tag where content_tag_id = ' + contentTagId);
     return contentTag[0];
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getTagsByAyah(ayahTranslationId: string) {    
    const conn = await connect();
    const contentTag = await conn.query('SELECT * FROM content_tag where ayah_translation_id = ' + ayahTranslationId);
    return contentTag[0];
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getAyahsByTag(tagId: string) {    
    const conn = await connect();
    const contentTag = await conn.query('SELECT * FROM content_tag where tag_id = ' + tagId);
    return contentTag[0];
}

export async function updateContentTag(contentTagObj: ContentTag): Promise<string> {
     try {
          const conn = await connect();
          let query = ``;
          let msg = 'row inserted!';
          if(contentTagObj.content_tag_id == undefined || contentTagObj.content_tag_id == null) {
            query = `insert into content_tag (tag_id, ayah_translation_id, date_created) values (${contentTagObj.tag_id},${contentTagObj.ayah_translation_id}, now())`;
          }
          else {
            query = `update content_tag set tag_id = ${contentTagObj.tag_id}, ayah_translation_id = ${contentTagObj.ayah_translation_id},  date_updated = now() where tag_id = ${contentTagObj.content_tag_id}`;
            msg = 'row updated!';
          }
          
          await conn.query(query);
          return msg;
     } catch (error) {
          throw new HTTP400Error(`Problem while updating tag = "${contentTagObj.content_tag_id}" in db!!!`);
     }     
}