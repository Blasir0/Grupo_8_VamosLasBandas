-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vlb_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

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
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `idColors` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`idColors`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Rojo'),(2,'Azul'),(3,'Negro'),(4,'Blanco'),(5,'Bordo');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `idProduct` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `image` text NOT NULL,
  `category` varchar(100) NOT NULL,
  `idUser` int(11) NOT NULL DEFAULT 1,
  `idColors` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`idProduct`),
  KEY `fk_users` (`idUser`),
  KEY `fk_colors` (`idColors`),
  CONSTRAINT `fk_colors` FOREIGN KEY (`idColors`) REFERENCES `colors` (`idColors`),
  CONSTRAINT `fk_users` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'Guitarra','Guitarra',60000,'guitar2.jpg','Ultimos agregados',3,1),(3,'Guitarra','Guitarra',40000,'guitar3.jpg','En oferta',3,2),(4,'Bajo','Bajo',50000,'bajo1.jpg','Ultimos agregados',3,3),(6,'Bajo','Bajo',40000,'bajo3.jpg','Ultimos agregados',3,4),(7,'Bateria','Bateria',90000,'bateria1.jpg','En oferta',3,5),(8,'Bateria','Bateria',80000,'bateria2.jpg','Ultimos agregados',3,1),(9,'Bateria','Bateria',70000,'bateria3.jpg','En oferta',3,2),(10,'Microfono','Microfono',20000,'microfono1.jpeg','Ultimos agregados',3,3),(11,'Microfono','Microfono',30000,'microfono2.jpg','En oferta',3,4),(12,'Microfono','Microfono',20000,'microfono3.jpg','Ultimos agregados',3,5),(13,'Teclado','Teclado',50000,'teclado1.webp','En oferta',3,1),(14,'Teclado','Teclado',60000,'teclado2.webp','Ultimos agregados',3,2),(15,'Teclado','Teclado',40000,'teclado3.jpg','En oferta',3,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `email` text DEFAULT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'juanperez@vlb.com','Juan','Perez','Comprador','$2a$10$/NWbmpaFYxTcH.NbfpmSa..dWNQUgmttbxA1xp','1674589144937-.png'),(3,'pabloperez@vlb.com','Pablo','Perez','Comprador','$2a$10$fiiR.M2G1wH/C9S4JW4ikOl11RzuTPcmbZhQpi0hQKV.b5flRRNcq','default.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-31 16:08:55
