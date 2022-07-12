-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: quranwbw
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ayah_translation`
--

DROP TABLE IF EXISTS `ayah_translation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ayah_translation` (
  `ayah_translation_id` int(11) NOT NULL AUTO_INCREMENT,
  `ayah_translator_id` int(3) DEFAULT NULL,
  `word_surah` int(3) DEFAULT NULL,
  `word_ayah` int(3) DEFAULT NULL,
  `culture_code` varchar(10) DEFAULT NULL,
  `ayah_translation` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`ayah_translation_id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ayah_translation`
--

LOCK TABLES `ayah_translation` WRITE;
/*!40000 ALTER TABLE `ayah_translation` DISABLE KEYS */;
INSERT INTO `ayah_translation` VALUES (4,1,1,2,'EN','22222'),(15,4,1,1,'en-IE','In the Name of Allah—the Most Compassionate, Most Merciful.'),(13,1,1,1,'en-IE','2222222222222222'),(14,2,1,1,'en-IE','1111111'),(16,4,1,2,'en-IE','All praise is for Allah—Lord of all worlds,'),(17,2,7,1,'en-IE','jlgsjdlkfgjslkdfgsljk');
/*!40000 ALTER TABLE `ayah_translation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-12 22:17:42
