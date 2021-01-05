import { connect } from '../config/mysqldb';
import { HTTP400Error } from '../errors/errors';
import { Tag } from '../interface/tag';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getTag(tagId: string) {    
     const conn = await connect();
     const tag = await conn.query('SELECT * FROM tag where tag_id = '+tagId);
     return tag[0];
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getAllTags() {    
    const conn = await connect();
    const tag = await conn.query('SELECT * FROM tag');
    return tag[0];
}

export async function updateTag(tagObj: Tag): Promise<string> {
     try {
          const conn = await connect();
          let query = ``;
          let msg = 'row inserted!';
          if(tagObj.tag_id == undefined || tagObj.tag_id == null) {
            query = `insert into tag (title, date_created) values ('${tagObj.title}', now())`;
          }
          else {
            query = `update tag set title = '${tagObj.title}', date_updated = now() where tag_id = ${tagObj.tag_id}`;
            msg = 'row updated!';
          }
          
          await conn.query(query);
          return msg;
     } catch (error) {
          throw new HTTP400Error(`Problem while updating tag = "${tagObj.tag_id}" in db!!!`);
     }     
}