-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 14, 2017 at 01:26 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `demo_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `demo_tb`
--

CREATE TABLE IF NOT EXISTS `demo_tb` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `message` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `demo_tb`
--

INSERT INTO `demo_tb` (`id`, `name`, `email`, `message`) VALUES
(1, 'Khushal', 'k@gmail.com', 'dsdjjkdsjksdk'),
(2, 'shivraj', 's@gmail.com', 'sdsdsdfndsfnldnsfndfn'),
(3, 'Viraj', 'undefined', 'undefined'),
(5, 'sddc', 'ddcfd@gmail.com', 'undefined'),
(6, 'kiran', 'kkkkk@gmail.com', 'sdfsdfhj');
