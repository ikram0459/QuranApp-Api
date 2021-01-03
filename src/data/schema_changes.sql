use quranwbw;	--29/12/2020 added new field
alter table word_data add column word_translation_urdu1 varchar(200);

use quranwbw;   --29/12/2020 ayah translator and translation table added
CREATE TABLE IF NOT EXISTS ayah_translator (
    ayah_translator_id INT AUTO_INCREMENT PRIMARY KEY,
    ayat_translator_name varchar(100),
    ayat_translator_detail varchar(500)
);
CREATE TABLE IF NOT EXISTS ayah_translation (
    ayah_translation_id INT AUTO_INCREMENT PRIMARY KEY,
    ayah_translator_id int(3),
    word_surah int(3),
    word_ayah int(3),
    culture_code varchar(10),
    ayah_translation varchar(1000)
);




