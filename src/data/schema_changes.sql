use quranwbw;	--29/12/2020 added new field
alter table word_data add column word_translation_urdu1 varchar(200);

use quranwbw;   --29/12/2020 ayah translator and translation table added
CREATE TABLE IF NOT EXISTS ayah_translator (
    ayah_translator_id INT AUTO_INCREMENT PRIMARY KEY,
    ayat_translator_name varchar(100),
    ayat_translator_detail varchar(500)
);
use quranwbw;
CREATE TABLE IF NOT EXISTS ayah_translation (
    ayah_translation_id INT AUTO_INCREMENT PRIMARY KEY,
    ayah_translator_id int(3),
    word_surah int(3),
    word_ayah int(3),
    culture_code varchar(10),
    ayah_translation varchar(1000)
);
use quranwbw;
CREATE TABLE IF NOT EXISTS tag (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    title varchar(500),
    date_created datetime,
    date_updated datetime,
    updated_by int(10)
);
use quranwbw;
CREATE TABLE IF NOT EXISTS content_tag (
    content_tag_id INT AUTO_INCREMENT PRIMARY KEY,
    tag_id int(10),
    ayah_translation_id int(10),
    date_created datetime,
    date_updated datetime,
    updated_by int(10)
);
use quranwbw;
alter table word_data add column word_root varchar(200);
alter table word_data add column word_arabic_uthmani varchar(200);
alter table word_data add column word_arabic_indopak varchar(200);




