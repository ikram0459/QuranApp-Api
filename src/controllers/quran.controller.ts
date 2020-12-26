import { connect } from '../config/mysqldb';

export async function getAyat(surahNumber: string, ayatNumber: string, translationId: string) {    
     const conn = await connect();
     const ayat = await conn.query('SELECT * FROM quranwbw.word_data w where w.word_surah = '+surahNumber+' and w.word_ayah = '+ayatNumber);
     return ayat[0];
}