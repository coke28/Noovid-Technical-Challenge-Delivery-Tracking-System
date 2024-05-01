-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 01, 2024 at 06:54 AM
-- Server version: 8.0.36
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `brg_central`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_log`
--

CREATE TABLE `activity_log` (
  `id` bigint UNSIGNED NOT NULL,
  `log_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject_id` bigint UNSIGNED DEFAULT NULL,
  `causer_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `causer_id` bigint UNSIGNED DEFAULT NULL,
  `properties` longtext COLLATE utf8mb4_unicode_ci,
  `batch_uuid` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ;

--
-- Dumping data for table `activity_log`
--

INSERT INTO `activity_log` (`id`, `log_name`, `description`, `subject_type`, `event`, `subject_id`, `causer_type`, `causer_id`, `properties`, `batch_uuid`, `created_at`, `updated_at`) VALUES
(1, 'default', 'created', 'App\\Models\\User', 'created', 1, NULL, NULL, '{\"attributes\":{\"id\":1,\"first_name\":\"Carmel\",\"last_name\":\"Howell\",\"email\":\"demo@demo.com\",\"email_verified_at\":\"2023-06-30T10:11:28.000000Z\",\"password\":\"$2y$10$biKZk\\/Tdk17yVPXzNcE3pOxxUj8dU50cqvkMDTwAnS6Cz2UuW8Lx6\",\"remember_token\":null,\"created_at\":\"2023-06-30T10:11:28.000000Z\",\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(2, 'default', 'created', 'App\\Models\\UserInfo', 'created', 1, NULL, NULL, '{\"attributes\":{\"id\":1,\"user_id\":1,\"avatar\":null,\"company\":\"Howell Group\",\"phone\":\"+1 (614) 382-5554\",\"website\":\"https:\\/\\/www.bernier.com\\/rerum-ab-quod-dignissimos-eos-velit-quasi\",\"country\":\"AS\",\"language\":\"sa\",\"timezone\":null,\"currency\":null,\"communication\":null,\"marketing\":null,\"created_at\":\"2023-06-30T10:11:28.000000Z\",\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(3, 'default', 'created', 'App\\Models\\User', 'created', 2, NULL, NULL, '{\"attributes\":{\"id\":2,\"first_name\":\"Harvey\",\"last_name\":\"Pagac\",\"email\":\"jamil40@example.com\",\"email_verified_at\":\"2023-06-30T10:11:28.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"uOhwZfqghU\",\"created_at\":\"2023-06-30T10:11:28.000000Z\",\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(4, 'default', 'created', 'App\\Models\\User', 'created', 3, NULL, NULL, '{\"attributes\":{\"id\":3,\"first_name\":\"Adriel\",\"last_name\":\"Botsford\",\"email\":\"ykeebler@example.org\",\"email_verified_at\":\"2023-06-30T10:11:28.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"arnzwoLoZo\",\"created_at\":\"2023-06-30T10:11:28.000000Z\",\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(5, 'default', 'created', 'App\\Models\\User', 'created', 4, NULL, NULL, '{\"attributes\":{\"id\":4,\"first_name\":\"Gia\",\"last_name\":\"Koss\",\"email\":\"ekrajcik@example.org\",\"email_verified_at\":\"2023-06-30T10:11:28.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"V1hWebVr8j\",\"created_at\":\"2023-06-30T10:11:28.000000Z\",\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(6, 'default', 'created', 'App\\Models\\User', 'created', 5, NULL, NULL, '{\"attributes\":{\"id\":5,\"first_name\":\"Camilla\",\"last_name\":\"Bechtelar\",\"email\":\"sonya.lesch@example.com\",\"email_verified_at\":\"2023-06-30T10:11:28.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"TpKRjfenbZ\",\"created_at\":\"2023-06-30T10:11:28.000000Z\",\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(7, 'default', 'created', 'App\\Models\\User', 'created', 6, NULL, NULL, '{\"attributes\":{\"id\":6,\"first_name\":\"Lucio\",\"last_name\":\"DuBuque\",\"email\":\"tgoodwin@example.org\",\"email_verified_at\":\"2023-06-30T10:11:28.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"8rHtGpQBlq\",\"created_at\":\"2023-06-30T10:11:28.000000Z\",\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(8, 'default', 'created', 'App\\Models\\User', 'created', 7, NULL, NULL, '{\"attributes\":{\"id\":7,\"first_name\":\"Joel\",\"last_name\":\"Auer\",\"email\":\"xwaters@example.org\",\"email_verified_at\":\"2023-06-30T10:11:28.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"KQ7N0LeIXI\",\"created_at\":\"2023-06-30T10:11:28.000000Z\",\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(9, 'default', 'created', 'App\\Models\\User', 'created', 8, NULL, NULL, '{\"attributes\":{\"id\":8,\"first_name\":\"Charlene\",\"last_name\":\"Dare\",\"email\":\"katharina.lindgren@example.com\",\"email_verified_at\":\"2023-06-30T10:11:28.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"fSsqhQMvJH\",\"created_at\":\"2023-06-30T10:11:28.000000Z\",\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(10, 'default', 'created', 'App\\Models\\User', 'created', 9, NULL, NULL, '{\"attributes\":{\"id\":9,\"first_name\":\"Amaya\",\"last_name\":\"Gottlieb\",\"email\":\"nicolas.rossie@example.org\",\"email_verified_at\":\"2023-06-30T10:11:28.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"tNwro7fZN2\",\"created_at\":\"2023-06-30T10:11:28.000000Z\",\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(11, 'default', 'created', 'App\\Models\\User', 'created', 10, NULL, NULL, '{\"attributes\":{\"id\":10,\"first_name\":\"Hilton\",\"last_name\":\"Hoeger\",\"email\":\"schuster.obie@example.net\",\"email_verified_at\":\"2023-06-30T10:11:28.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"NZTfavZqJz\",\"created_at\":\"2023-06-30T10:11:28.000000Z\",\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(12, 'default', 'created', 'App\\Models\\User', 'created', 11, NULL, NULL, '{\"attributes\":{\"id\":11,\"first_name\":\"Alda\",\"last_name\":\"Douglas\",\"email\":\"noemi90@example.org\",\"email_verified_at\":\"2023-06-30T10:11:28.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"IYBwuhEIhH\",\"created_at\":\"2023-06-30T10:11:28.000000Z\",\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(13, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-03T06:36:24.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-06-30T10:11:28.000000Z\"}}', NULL, '2023-07-02 22:36:24', '2023-07-02 22:36:24'),
(14, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-03T06:39:06.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-03T06:36:24.000000Z\"}}', NULL, '2023-07-02 22:39:06', '2023-07-02 22:39:06'),
(15, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-03T06:40:03.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-03T06:39:06.000000Z\"}}', NULL, '2023-07-02 22:40:03', '2023-07-02 22:40:03'),
(16, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-03T06:40:11.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-03T06:40:03.000000Z\"}}', NULL, '2023-07-02 22:40:11', '2023-07-02 22:40:11'),
(17, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-03T06:40:16.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-03T06:40:11.000000Z\"}}', NULL, '2023-07-02 22:40:16', '2023-07-02 22:40:16'),
(18, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-03T06:40:20.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-03T06:40:16.000000Z\"}}', NULL, '2023-07-02 22:40:20', '2023-07-02 22:40:20'),
(19, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-03T06:41:07.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-03T06:40:20.000000Z\"}}', NULL, '2023-07-02 22:41:07', '2023-07-02 22:41:07'),
(20, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-03T06:47:58.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-03T06:41:07.000000Z\"}}', NULL, '2023-07-02 22:47:58', '2023-07-02 22:47:58'),
(21, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-03T06:48:00.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-03T06:47:58.000000Z\"}}', NULL, '2023-07-02 22:48:00', '2023-07-02 22:48:00'),
(22, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-03T06:48:07.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-03T06:48:00.000000Z\"}}', NULL, '2023-07-02 22:48:07', '2023-07-02 22:48:07'),
(23, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-10T06:56:20.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-03T06:48:07.000000Z\"}}', NULL, '2023-07-09 22:56:20', '2023-07-09 22:56:20'),
(24, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-11T01:36:29.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-10T06:56:20.000000Z\"}}', NULL, '2023-07-10 17:36:29', '2023-07-10 17:36:29'),
(25, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-11T01:36:31.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-11T01:36:29.000000Z\"}}', NULL, '2023-07-10 17:36:31', '2023-07-10 17:36:31'),
(26, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-25T02:01:55.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-11T01:36:31.000000Z\"}}', NULL, '2023-07-24 18:01:55', '2023-07-24 18:01:55'),
(27, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-25T02:01:59.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-25T02:01:55.000000Z\"}}', NULL, '2023-07-24 18:01:59', '2023-07-24 18:01:59'),
(28, 'default', 'created', 'App\\Models\\User', 'created', 12, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":12,\"first_name\":\"Xyla\",\"last_name\":\"Oconnor\",\"user_level_id\":1,\"email\":\"tymo@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$dBH6nthC\\/uhyZzMZ\\/Wq7NeUg3VvoSvreGa73EkliRg55YWGtOkFaW\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-25T04:24:09.000000Z\",\"updated_at\":\"2023-07-25T04:24:09.000000Z\"}}', NULL, '2023-07-24 20:24:09', '2023-07-24 20:24:09'),
(29, 'default', 'created', 'App\\Models\\User', 'created', 13, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":13,\"first_name\":\"August\",\"last_name\":\"Foster\",\"user_level_id\":1,\"email\":\"peqokuqe@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$9tKKjoEGIfal8FhrbRyqJ.m8WB3RrlO8qMF7lOxi7PF2HGPkZpVX.\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-25T04:28:16.000000Z\",\"updated_at\":\"2023-07-25T04:28:16.000000Z\"}}', NULL, '2023-07-24 20:28:16', '2023-07-24 20:28:16'),
(30, 'default', 'created', 'App\\Models\\User', 'created', 14, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":14,\"first_name\":\"Kohkie\",\"last_name\":\"Izumi\",\"user_level_id\":1,\"email\":\"maveric.izumi@rvnsolutions.com\",\"email_verified_at\":null,\"password\":\"$2y$10$WoPQq0xezcU27f4JwkxheeFyc.3U9rOKU8rntfEB6xYsI6MTHmU1y\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-25T04:44:56.000000Z\",\"updated_at\":\"2023-07-25T04:44:56.000000Z\"}}', NULL, '2023-07-24 20:44:56', '2023-07-24 20:44:56'),
(31, 'default', 'created', 'App\\Models\\User', 'created', 15, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":15,\"first_name\":\"Melinda\",\"last_name\":\"Middleton\",\"user_level_id\":1,\"email\":\"likenido@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$XK7vnu6UYrfhDoPjCIskIOayPj1xi9ivhOfURLgNFM0VwdJy2mheC\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-25T06:51:25.000000Z\",\"updated_at\":\"2023-07-25T06:51:25.000000Z\"}}', NULL, '2023-07-24 22:51:25', '2023-07-24 22:51:25'),
(32, 'default', 'created', 'App\\Models\\User', 'created', 16, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":16,\"first_name\":\"Ciara\",\"last_name\":\"Fischer\",\"user_level_id\":1,\"email\":\"kefiqilo@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$XLxkIinqHt4qeG0Yhc4V5uDmL8AqrSyuqFiWMv72grsHO5ZHVtsY.\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-25T06:51:38.000000Z\",\"updated_at\":\"2023-07-25T06:51:38.000000Z\"}}', NULL, '2023-07-24 22:51:38', '2023-07-24 22:51:38'),
(33, 'default', 'created', 'App\\Models\\User', 'created', 17, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":17,\"first_name\":\"Ulysses\",\"last_name\":\"Mcgowan\",\"user_level_id\":1,\"email\":\"fuzyhyso@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$Ymyk6d0dGElrlQfHvooFYuaT9wrOHt58Bfq1dUhfG.MNqIoCMnKMq\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-25T06:54:33.000000Z\",\"updated_at\":\"2023-07-25T06:54:33.000000Z\"}}', NULL, '2023-07-24 22:54:33', '2023-07-24 22:54:33'),
(34, 'default', 'created', 'App\\Models\\User', 'created', 18, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":18,\"first_name\":\"Kylie\",\"last_name\":\"Duran\",\"user_level_id\":1,\"email\":\"kematyk@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$\\/1rzU4GrHgsx5oCak6DDNOMc14I09r52sdxSWOtt21mQIqci.iQU2\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-25T06:56:55.000000Z\",\"updated_at\":\"2023-07-25T06:56:55.000000Z\"}}', NULL, '2023-07-24 22:56:55', '2023-07-24 22:56:55'),
(35, 'default', 'created', 'App\\Models\\User', 'created', 19, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":19,\"first_name\":\"Ralph\",\"last_name\":\"Larson\",\"user_level_id\":1,\"email\":\"dotyxiqis@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$iTQO73u2b5jAOYTsXv9Or.rpoN4YKQS2pfalaqPPec8Wyys\\/xW0z6\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-25T06:58:16.000000Z\",\"updated_at\":\"2023-07-25T06:58:16.000000Z\"}}', NULL, '2023-07-24 22:58:16', '2023-07-24 22:58:16'),
(36, 'default', 'created', 'App\\Models\\User', 'created', 20, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":20,\"first_name\":\"Mariko\",\"last_name\":\"Heath\",\"user_level_id\":1,\"email\":\"subiri@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$mDtpPkW2fGKxWQQPkHkAEuLgFEjSBX4C3WxTvexWnSZJn1.Q53vaK\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-25T07:00:32.000000Z\",\"updated_at\":\"2023-07-25T07:00:32.000000Z\"}}', NULL, '2023-07-24 23:00:32', '2023-07-24 23:00:32'),
(37, 'default', 'created', 'App\\Models\\User', 'created', 21, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":21,\"first_name\":\"Zenia\",\"last_name\":\"Koch\",\"user_level_id\":1,\"email\":\"jarolejeqe@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$J0m0SewPeqB3t1cWg3pGWeSsbLXP0P62jaAFf\\/lvrhIMWhd0fuZMS\",\"remember_token\":null,\"status\":1,\"created_at\":\"2023-07-25T07:03:28.000000Z\",\"updated_at\":\"2023-07-25T07:03:28.000000Z\"}}', NULL, '2023-07-24 23:03:28', '2023-07-24 23:03:28'),
(38, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-25T08:05:44.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-25T02:01:59.000000Z\"}}', NULL, '2023-07-25 00:05:44', '2023-07-25 00:05:44'),
(39, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-25T08:05:47.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-25T08:05:44.000000Z\"}}', NULL, '2023-07-25 00:05:47', '2023-07-25 00:05:47'),
(40, 'default', 'created', 'App\\Models\\User', 'created', 22, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":22,\"first_name\":\"Tamara\",\"last_name\":\"Camacho\",\"user_level_id\":1,\"email\":\"kewovi@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$E9z54hv0mnXW7nNjP.7axuI\\/8mUbuW1ifHbkeEbeueS2EZbond0mS\",\"remember_token\":null,\"status\":1,\"created_at\":\"2023-07-25T08:48:22.000000Z\",\"updated_at\":\"2023-07-25T08:48:22.000000Z\"}}', NULL, '2023-07-25 00:48:22', '2023-07-25 00:48:22'),
(41, 'default', 'created', 'App\\Models\\User', 'created', 23, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":23,\"first_name\":\"Ashton\",\"last_name\":\"Davidson\",\"user_level_id\":1,\"email\":\"woqely@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$.UGLYTXk1.AIBQA8c.Jvd.pGIZtR3uC0qcPd1GMMepz5Dj\\/PqGMai\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-25T09:06:39.000000Z\",\"updated_at\":\"2023-07-25T09:06:39.000000Z\"}}', NULL, '2023-07-25 01:06:39', '2023-07-25 01:06:39'),
(42, 'default', 'updated', 'App\\Models\\User', 'updated', 23, 'App\\Models\\User', 1, '{\"attributes\":{\"password\":\"$2y$10$RTiP5Nf6ICjnFjKzBMsOKOHalUTheZFQ4Dw1fOTH\\/b9U4f25TDV0q\",\"updated_at\":\"2023-07-25T09:06:57.000000Z\"},\"old\":{\"password\":\"$2y$10$.UGLYTXk1.AIBQA8c.Jvd.pGIZtR3uC0qcPd1GMMepz5Dj\\/PqGMai\",\"updated_at\":\"2023-07-25T09:06:39.000000Z\"}}', NULL, '2023-07-25 01:06:57', '2023-07-25 01:06:57'),
(43, 'default', 'updated', 'App\\Models\\User', 'updated', 23, 'App\\Models\\User', 1, '{\"attributes\":{\"first_name\":\"AshtonEDIT\",\"last_name\":\"AshtonEDIT\",\"password\":\"$2y$10$l7OZzk85.MCGrjz6uu9i4.MFxOx3F1m6car2PexbDmkMNJU.8npsW\",\"updated_at\":\"2023-07-25T09:07:18.000000Z\"},\"old\":{\"first_name\":\"Ashton\",\"last_name\":\"Davidson\",\"password\":\"$2y$10$RTiP5Nf6ICjnFjKzBMsOKOHalUTheZFQ4Dw1fOTH\\/b9U4f25TDV0q\",\"updated_at\":\"2023-07-25T09:06:57.000000Z\"}}', NULL, '2023-07-25 01:07:18', '2023-07-25 01:07:18'),
(44, 'default', 'updated', 'App\\Models\\User', 'updated', 23, 'App\\Models\\User', 1, '{\"attributes\":{\"password\":\"$2y$10$btnCdQZTU0oSb8KzX.rykuepAWmUfb085NQ.F7gWO.KauLQ1YfO92\",\"status\":1,\"updated_at\":\"2023-07-25T09:07:25.000000Z\"},\"old\":{\"password\":\"$2y$10$l7OZzk85.MCGrjz6uu9i4.MFxOx3F1m6car2PexbDmkMNJU.8npsW\",\"status\":0,\"updated_at\":\"2023-07-25T09:07:18.000000Z\"}}', NULL, '2023-07-25 01:07:25', '2023-07-25 01:07:25'),
(45, 'default', 'created', 'App\\Models\\User', 'created', 24, 'App\\Models\\User', 1, '{\"attributes\":{\"id\":24,\"first_name\":\"Harriet\",\"last_name\":\"Davis\",\"user_level_id\":7,\"email\":\"gycev@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$KmzWBpL143YzzEm\\/4XjZoeVrglExpPYNyJv7VcYMKcYiWt3tRg9ku\",\"remember_token\":null,\"status\":1,\"created_at\":\"2023-07-25T09:17:32.000000Z\",\"updated_at\":\"2023-07-25T09:17:32.000000Z\"}}', NULL, '2023-07-25 01:17:32', '2023-07-25 01:17:32'),
(46, 'default', 'updated', 'App\\Models\\User', 'updated', 24, 'App\\Models\\User', 1, '{\"attributes\":{\"user_level_id\":1,\"password\":\"$2y$10$sEZGjjRh0oYpls7wXQaLOeNcwvfkxFbHGFnu.dFy4ws.4rxypFvIG\",\"updated_at\":\"2023-07-25T09:17:37.000000Z\"},\"old\":{\"user_level_id\":7,\"password\":\"$2y$10$KmzWBpL143YzzEm\\/4XjZoeVrglExpPYNyJv7VcYMKcYiWt3tRg9ku\",\"updated_at\":\"2023-07-25T09:17:32.000000Z\"}}', NULL, '2023-07-25 01:17:37', '2023-07-25 01:17:37'),
(47, 'default', 'updated', 'App\\Models\\User', 'updated', 24, 'App\\Models\\User', 1, '{\"attributes\":{\"first_name\":\"HarrietTEST\",\"last_name\":\"HarrietTEST\",\"email\":\"gycev@mailinator.comHarrietTEST\",\"password\":\"$2y$10$uRwQsPJ7lPkxWd1Cdmx7L.1SfnqyIgErT0tc.lRkHxmUOrYz4aLDW\",\"status\":0,\"updated_at\":\"2023-07-25T09:17:57.000000Z\"},\"old\":{\"first_name\":\"Harriet\",\"last_name\":\"Davis\",\"email\":\"gycev@mailinator.com\",\"password\":\"$2y$10$sEZGjjRh0oYpls7wXQaLOeNcwvfkxFbHGFnu.dFy4ws.4rxypFvIG\",\"status\":1,\"updated_at\":\"2023-07-25T09:17:37.000000Z\"}}', NULL, '2023-07-25 01:17:57', '2023-07-25 01:17:57'),
(48, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-25T09:18:44.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-25T08:05:47.000000Z\"}}', NULL, '2023-07-25 01:18:44', '2023-07-25 01:18:44'),
(49, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-25T09:18:50.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-25T09:18:44.000000Z\"}}', NULL, '2023-07-25 01:18:50', '2023-07-25 01:18:50'),
(50, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-25T09:32:34.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-25T09:18:50.000000Z\"}}', NULL, '2023-07-25 01:32:34', '2023-07-25 01:32:34'),
(51, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-25T09:34:52.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-25T09:32:34.000000Z\"}}', NULL, '2023-07-25 01:34:52', '2023-07-25 01:34:52'),
(52, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"user_level_id\":7,\"password\":\"$2y$10$qb4nBmeoWlKjxmRNpZlguecVK3KJRIbiDoVhlkC1hjHDCujNmo0jq\",\"updated_at\":\"2023-07-25T09:36:26.000000Z\"},\"old\":{\"user_level_id\":1,\"password\":\"$2y$10$biKZk\\/Tdk17yVPXzNcE3pOxxUj8dU50cqvkMDTwAnS6Cz2UuW8Lx6\",\"updated_at\":\"2023-07-25T09:34:52.000000Z\"}}', NULL, '2023-07-25 01:36:26', '2023-07-25 01:36:26'),
(53, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"user_level_id\":1,\"password\":\"$2y$10$OdzWyOKVrIzFDqIp4M0i7.wx8zcqK46\\/5lv1yiL9mP\\/xyVgbiInxa\",\"updated_at\":\"2023-07-25T09:36:32.000000Z\"},\"old\":{\"user_level_id\":7,\"password\":\"$2y$10$qb4nBmeoWlKjxmRNpZlguecVK3KJRIbiDoVhlkC1hjHDCujNmo0jq\",\"updated_at\":\"2023-07-25T09:36:26.000000Z\"}}', NULL, '2023-07-25 01:36:32', '2023-07-25 01:36:32'),
(54, 'default', 'updated', 'App\\Models\\User', 'updated', 23, 'App\\Models\\User', 1, '{\"attributes\":{\"user_level_id\":7,\"password\":\"$2y$10$5Km65ql0ezaxB2aLX\\/Nmu.DGpUTi\\/Pw2fepYVPaWhRWE7qdp8FUdK\",\"updated_at\":\"2023-07-25T09:36:37.000000Z\"},\"old\":{\"user_level_id\":1,\"password\":\"$2y$10$btnCdQZTU0oSb8KzX.rykuepAWmUfb085NQ.F7gWO.KauLQ1YfO92\",\"updated_at\":\"2023-07-25T09:07:25.000000Z\"}}', NULL, '2023-07-25 01:36:37', '2023-07-25 01:36:37'),
(55, 'default', 'updated', 'App\\Models\\User', 'updated', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-25T09:37:13.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-25T09:36:32.000000Z\"}}', NULL, '2023-07-25 01:37:13', '2023-07-25 01:37:13'),
(56, 'default', 'created', 'App\\Models\\User', 'created', 25, NULL, NULL, '{\"attributes\":{\"id\":25,\"first_name\":\"Princess\",\"last_name\":\"Stark\",\"user_level_id\":1,\"email\":\"demo@demo.com\",\"email_verified_at\":\"2023-07-25T09:40:52.000000Z\",\"password\":\"$2y$10$YXXUuxrQkTcDlco6AKIN6eSy5qJNiPckqs05P4.vaiwG95y9aBDqG\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-25T09:40:52.000000Z\",\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(57, 'default', 'created', 'App\\Models\\UserInfo', 'created', 2, NULL, NULL, '{\"attributes\":{\"id\":2,\"user_id\":25,\"avatar\":null,\"company\":\"Schoen-Windler\",\"phone\":\"+1-623-812-6567\",\"website\":\"http:\\/\\/casper.com\\/alias-reiciendis-molestiae-eos-molestiae\",\"country\":\"HK\",\"language\":\"mt\",\"timezone\":null,\"currency\":null,\"communication\":null,\"marketing\":null,\"created_at\":\"2023-07-25T09:40:52.000000Z\",\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(58, 'default', 'created', 'App\\Models\\User', 'created', 26, NULL, NULL, '{\"attributes\":{\"id\":26,\"first_name\":\"Mercedes\",\"last_name\":\"Balistreri\",\"user_level_id\":1,\"email\":\"faye34@example.com\",\"email_verified_at\":\"2023-07-25T09:40:52.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"QPwVVujTTA\",\"status\":0,\"created_at\":\"2023-07-25T09:40:52.000000Z\",\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(59, 'default', 'created', 'App\\Models\\User', 'created', 27, NULL, NULL, '{\"attributes\":{\"id\":27,\"first_name\":\"Nicole\",\"last_name\":\"Reynolds\",\"user_level_id\":1,\"email\":\"carter.colin@example.com\",\"email_verified_at\":\"2023-07-25T09:40:52.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"XfNxihhbR8\",\"status\":0,\"created_at\":\"2023-07-25T09:40:52.000000Z\",\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(60, 'default', 'created', 'App\\Models\\User', 'created', 28, NULL, NULL, '{\"attributes\":{\"id\":28,\"first_name\":\"Rae\",\"last_name\":\"Williamson\",\"user_level_id\":1,\"email\":\"bette34@example.org\",\"email_verified_at\":\"2023-07-25T09:40:52.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"mxdYJ9DGZ3\",\"status\":0,\"created_at\":\"2023-07-25T09:40:52.000000Z\",\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(61, 'default', 'created', 'App\\Models\\User', 'created', 29, NULL, NULL, '{\"attributes\":{\"id\":29,\"first_name\":\"Hattie\",\"last_name\":\"Casper\",\"user_level_id\":1,\"email\":\"heathcote.keely@example.com\",\"email_verified_at\":\"2023-07-25T09:40:52.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"oQk7NYQpg7\",\"status\":0,\"created_at\":\"2023-07-25T09:40:52.000000Z\",\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(62, 'default', 'created', 'App\\Models\\User', 'created', 30, NULL, NULL, '{\"attributes\":{\"id\":30,\"first_name\":\"Fay\",\"last_name\":\"Bednar\",\"user_level_id\":1,\"email\":\"jack20@example.org\",\"email_verified_at\":\"2023-07-25T09:40:52.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"6JvJjmlq0t\",\"status\":0,\"created_at\":\"2023-07-25T09:40:52.000000Z\",\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(63, 'default', 'created', 'App\\Models\\User', 'created', 31, NULL, NULL, '{\"attributes\":{\"id\":31,\"first_name\":\"Simone\",\"last_name\":\"Williamson\",\"user_level_id\":1,\"email\":\"heather.boehm@example.net\",\"email_verified_at\":\"2023-07-25T09:40:52.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"ryg2P0Ey4P\",\"status\":0,\"created_at\":\"2023-07-25T09:40:52.000000Z\",\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(64, 'default', 'created', 'App\\Models\\User', 'created', 32, NULL, NULL, '{\"attributes\":{\"id\":32,\"first_name\":\"Juvenal\",\"last_name\":\"Gulgowski\",\"user_level_id\":1,\"email\":\"reichel.mariam@example.org\",\"email_verified_at\":\"2023-07-25T09:40:52.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"oVjYKIni2Y\",\"status\":0,\"created_at\":\"2023-07-25T09:40:52.000000Z\",\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(65, 'default', 'created', 'App\\Models\\User', 'created', 33, NULL, NULL, '{\"attributes\":{\"id\":33,\"first_name\":\"Katherine\",\"last_name\":\"O\'Hara\",\"user_level_id\":1,\"email\":\"iyost@example.com\",\"email_verified_at\":\"2023-07-25T09:40:52.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"DyTTo7bYxy\",\"status\":0,\"created_at\":\"2023-07-25T09:40:52.000000Z\",\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(66, 'default', 'created', 'App\\Models\\User', 'created', 34, NULL, NULL, '{\"attributes\":{\"id\":34,\"first_name\":\"Amani\",\"last_name\":\"Adams\",\"user_level_id\":1,\"email\":\"gillian86@example.com\",\"email_verified_at\":\"2023-07-25T09:40:52.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"bn3NAJAqxA\",\"status\":0,\"created_at\":\"2023-07-25T09:40:52.000000Z\",\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(67, 'default', 'created', 'App\\Models\\User', 'created', 35, NULL, NULL, '{\"attributes\":{\"id\":35,\"first_name\":\"Joseph\",\"last_name\":\"Ankunding\",\"user_level_id\":1,\"email\":\"tiara.hahn@example.com\",\"email_verified_at\":\"2023-07-25T09:40:52.000000Z\",\"password\":\"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\\/.og\\/at2.uheWG\\/igi\",\"remember_token\":\"AfaibRgCLf\",\"status\":0,\"created_at\":\"2023-07-25T09:40:52.000000Z\",\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(68, 'default', 'updated', 'App\\Models\\User', 'updated', 25, 'App\\Models\\User', 25, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-25T09:41:11.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-25T09:40:52.000000Z\"}}', NULL, '2023-07-25 01:41:11', '2023-07-25 01:41:11'),
(69, 'default', 'updated', 'App\\Models\\User', 'updated', 25, 'App\\Models\\User', 25, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-25T09:42:18.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-25T09:41:11.000000Z\"}}', NULL, '2023-07-25 01:42:18', '2023-07-25 01:42:18'),
(70, 'default', 'updated', 'App\\Models\\User', 'updated', 25, 'App\\Models\\User', 25, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-25T09:42:21.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-25T09:42:18.000000Z\"}}', NULL, '2023-07-25 01:42:21', '2023-07-25 01:42:21'),
(71, 'default', 'created', 'App\\Models\\User', 'created', 36, 'App\\Models\\User', 25, '{\"attributes\":{\"id\":36,\"first_name\":\"Jesse\",\"last_name\":\"Castaneda\",\"user_level_id\":1,\"email\":\"doxufuf@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$rbCVyrxh.DJ0tMJdf6JSJ.GAsLJ880LuOuac7dwbeXyC9sLyC5RU.\",\"remember_token\":null,\"status\":1,\"created_at\":\"2023-07-26T01:35:51.000000Z\",\"updated_at\":\"2023-07-26T01:35:51.000000Z\"}}', NULL, '2023-07-25 17:35:51', '2023-07-25 17:35:51'),
(72, 'default', 'created', 'App\\Models\\User', 'created', 37, 'App\\Models\\User', 25, '{\"attributes\":{\"id\":37,\"first_name\":\"Chaney\",\"last_name\":\"Haney\",\"user_level_id\":7,\"email\":\"ducod@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$wL2OZax3Ov887unYTdcfF.lay2thTTl.jlsQ.75mB3pFTFvmJEE0m\",\"remember_token\":null,\"status\":1,\"created_at\":\"2023-07-26T01:36:36.000000Z\",\"updated_at\":\"2023-07-26T01:36:36.000000Z\"}}', NULL, '2023-07-25 17:36:36', '2023-07-25 17:36:36'),
(73, 'default', 'created', 'App\\Models\\User', 'created', 39, NULL, NULL, '{\"attributes\":{\"id\":39,\"first_name\":\"Meda\",\"last_name\":\"Bednar\",\"user_level_id\":1,\"email\":\"demo@demo.com\",\"email_verified_at\":\"2023-07-27T06:55:07.000000Z\",\"password\":\"$2y$10$4nN30crU5hx9FAguAsh7putr9GL0swDpAvIpGckDybiKL5RveOl4y\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-27T06:55:07.000000Z\",\"updated_at\":\"2023-07-27T06:55:07.000000Z\"}}', NULL, '2023-07-26 22:55:07', '2023-07-26 22:55:07'),
(74, 'default', 'created', 'App\\Models\\UserInfo', 'created', 3, NULL, NULL, '{\"attributes\":{\"id\":3,\"user_id\":39,\"avatar\":null,\"company\":\"Mraz and Sons\",\"phone\":\"+15702889791\",\"website\":\"http:\\/\\/www.romaguera.info\\/incidunt-id-et-et-illum-quam-quia\",\"country\":\"CD\",\"language\":\"ch\",\"timezone\":null,\"currency\":null,\"communication\":null,\"marketing\":null,\"created_at\":\"2023-07-27T06:55:07.000000Z\",\"updated_at\":\"2023-07-27T06:55:07.000000Z\"}}', NULL, '2023-07-26 22:55:07', '2023-07-26 22:55:07'),
(75, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-27T06:55:14.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-27T06:55:07.000000Z\"}}', NULL, '2023-07-26 22:55:14', '2023-07-26 22:55:14'),
(76, 'default', 'created', 'App\\Models\\User', 'created', 40, 'App\\Models\\User', 39, '{\"attributes\":{\"id\":40,\"first_name\":\"Koki\",\"last_name\":\"Izumi\",\"user_level_id\":11,\"email\":\"izumi@gmail.com\",\"email_verified_at\":null,\"password\":\"$2y$10$G8fVDqy1iaDgSW3LPiVCRe\\/lcXZ2IkIfa.hLwY2IyJWQvi32pNrG.\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-07-27T06:56:04.000000Z\",\"updated_at\":\"2023-07-27T06:56:04.000000Z\"}}', NULL, '2023-07-26 22:56:04', '2023-07-26 22:56:04'),
(77, 'default', 'updated', 'App\\Models\\User', 'updated', 40, 'App\\Models\\User', 39, '{\"attributes\":{\"first_name\":\"KokiEDITED\",\"last_name\":\"IzumiEDITED\",\"user_level_id\":12,\"email\":\"izumi@gmail.comEDITED\",\"password\":\"$2y$10$huohnNtgig0iFV\\/IRG5eLuoViEFKcI8SJgUJdhLa9in77PgaMX4H6\",\"status\":1,\"updated_at\":\"2023-07-27T06:56:27.000000Z\"},\"old\":{\"first_name\":\"Koki\",\"last_name\":\"Izumi\",\"user_level_id\":11,\"email\":\"izumi@gmail.com\",\"password\":\"$2y$10$G8fVDqy1iaDgSW3LPiVCRe\\/lcXZ2IkIfa.hLwY2IyJWQvi32pNrG.\",\"status\":0,\"updated_at\":\"2023-07-27T06:56:04.000000Z\"}}', NULL, '2023-07-26 22:56:27', '2023-07-26 22:56:27'),
(78, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-27T06:56:53.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-27T06:55:14.000000Z\"}}', NULL, '2023-07-26 22:56:53', '2023-07-26 22:56:53'),
(79, 'default', 'updated', 'App\\Models\\User', 'updated', 40, 'App\\Models\\User', 40, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-07-27T06:57:26.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-27T06:56:27.000000Z\"}}', NULL, '2023-07-26 22:57:26', '2023-07-26 22:57:26'),
(80, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-07-27T06:57:29.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-07-27T06:56:53.000000Z\"}}', NULL, '2023-07-26 22:57:29', '2023-07-26 22:57:29'),
(81, 'default', 'updated', 'App\\Models\\User', 'updated', 40, 'App\\Models\\User', 39, '{\"attributes\":{\"first_name\":\"KokiEDITEDD\",\"password\":\"$2y$10$tqnqSh4ckD3yswt6LRSuLuqsrAx1gF05x65U2zT6UPaeKZhChdN5m\",\"updated_at\":\"2023-08-29T05:09:01.000000Z\"},\"old\":{\"first_name\":\"KokiEDITED\",\"password\":\"$2y$10$huohnNtgig0iFV\\/IRG5eLuoViEFKcI8SJgUJdhLa9in77PgaMX4H6\",\"updated_at\":\"2023-07-27T06:57:26.000000Z\"}}', NULL, '2023-08-28 21:09:01', '2023-08-28 21:09:01'),
(82, 'default', 'created', 'App\\Models\\User', 'created', 41, 'App\\Models\\User', 39, '{\"attributes\":{\"id\":41,\"first_name\":\"Kaye\",\"last_name\":\"Heath\",\"user_level_id\":11,\"email\":\"dogononugu@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$TFrRfgK2HDaV03H07JSKrOmZVbiRshstqA2pt79Qp6bqOqok04DUy\",\"remember_token\":null,\"status\":1,\"created_at\":\"2023-08-29T05:09:17.000000Z\",\"updated_at\":\"2023-08-29T05:09:17.000000Z\"}}', NULL, '2023-08-28 21:09:17', '2023-08-28 21:09:17'),
(83, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"qeijjfGvd1XSdA7ueyEsjbThcnhqjwLs0lzGoFQpDCBbQIQx7E6omQVhcKVB\"},\"old\":{\"remember_token\":null}}', NULL, '2023-08-30 21:02:41', '2023-08-30 21:02:41'),
(84, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-08-31T05:13:24.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-07-27T06:57:29.000000Z\"}}', NULL, '2023-08-30 21:13:24', '2023-08-30 21:13:24'),
(85, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"BaLP04bXiymxvKr94SsLmycCl9rfQOOYZ2EOmlga80qi0WabM2UKgBvyBytM\"},\"old\":{\"remember_token\":\"qeijjfGvd1XSdA7ueyEsjbThcnhqjwLs0lzGoFQpDCBbQIQx7E6omQVhcKVB\"}}', NULL, '2023-08-30 21:13:24', '2023-08-30 21:13:24'),
(86, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-08-31T05:13:27.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-08-31T05:13:24.000000Z\"}}', NULL, '2023-08-30 21:13:27', '2023-08-30 21:13:27'),
(87, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-08-31T05:13:32.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-08-31T05:13:27.000000Z\"}}', NULL, '2023-08-30 21:13:32', '2023-08-30 21:13:32'),
(88, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"WgNd26CbvTr57KELFH5rF4wTCwP1albN1JUreFr9wu0sIVI1pfXYnkuCx3a7\"},\"old\":{\"remember_token\":\"BaLP04bXiymxvKr94SsLmycCl9rfQOOYZ2EOmlga80qi0WabM2UKgBvyBytM\"}}', NULL, '2023-08-30 21:13:32', '2023-08-30 21:13:32'),
(89, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-08-31T05:15:05.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-08-31T05:13:32.000000Z\"}}', NULL, '2023-08-30 21:15:05', '2023-08-30 21:15:05'),
(90, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-09-05T01:44:32.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-08-31T05:15:05.000000Z\"}}', NULL, '2023-09-04 17:44:32', '2023-09-04 17:44:32'),
(91, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"huuHz94DBdP85i5u7kwKN8e9Y9uosPpT9tXmqWkSSEc7BCt7NoqA6BZsWFBS\"},\"old\":{\"remember_token\":\"WgNd26CbvTr57KELFH5rF4wTCwP1albN1JUreFr9wu0sIVI1pfXYnkuCx3a7\"}}', NULL, '2023-09-04 17:44:32', '2023-09-04 17:44:32'),
(92, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-09-05T01:44:34.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-09-05T01:44:32.000000Z\"}}', NULL, '2023-09-04 17:44:34', '2023-09-04 17:44:34'),
(93, 'default', 'created', 'App\\Models\\User', 'created', 42, 'App\\Models\\User', 39, '{\"attributes\":{\"id\":42,\"first_name\":\"XanthusTEST\",\"last_name\":\"NolanTEST\",\"user_level_id\":1,\"email\":\"taqehu@mailinator.comTEST\",\"email_verified_at\":null,\"password\":\"$2y$10$a7uTeuhAVHwQ7T5GPaJKzus7KAda\\/E1l3.xmmtg8md0Jb0PGuzGxK\",\"remember_token\":null,\"status\":0,\"created_at\":\"2023-09-05T02:10:03.000000Z\",\"updated_at\":\"2023-09-05T02:10:03.000000Z\"}}', NULL, '2023-09-04 18:10:03', '2023-09-04 18:10:03'),
(94, 'default', 'updated', 'App\\Models\\User', 'updated', 42, 'App\\Models\\User', 39, '{\"attributes\":{\"first_name\":\"XanthusTESTED\",\"last_name\":\"NolanTESTED\",\"user_level_id\":11,\"email\":\"taqehu@mailinator.comTESTED\",\"password\":\"$2y$10$h3WMq4QNZVNJ3a0pQrdeDOvak34FVkax5rwXMwGZpyIkSa3V9.sNO\",\"status\":1,\"updated_at\":\"2023-09-05T02:10:20.000000Z\"},\"old\":{\"first_name\":\"XanthusTEST\",\"last_name\":\"NolanTEST\",\"user_level_id\":1,\"email\":\"taqehu@mailinator.comTEST\",\"password\":\"$2y$10$a7uTeuhAVHwQ7T5GPaJKzus7KAda\\/E1l3.xmmtg8md0Jb0PGuzGxK\",\"status\":0,\"updated_at\":\"2023-09-05T02:10:03.000000Z\"}}', NULL, '2023-09-04 18:10:20', '2023-09-04 18:10:20'),
(95, 'default', 'updated', 'App\\Models\\User', 'updated', 42, 'App\\Models\\User', 39, '{\"attributes\":{\"user_level_id\":1,\"password\":\"$2y$10$p0RdJPqa.n1STpDqtlRZ2eWI.Git.vmlK1T\\/MhBsNdkFPlg5Wsy3S\",\"status\":0,\"updated_at\":\"2023-09-05T02:10:43.000000Z\"},\"old\":{\"user_level_id\":11,\"password\":\"$2y$10$h3WMq4QNZVNJ3a0pQrdeDOvak34FVkax5rwXMwGZpyIkSa3V9.sNO\",\"status\":1,\"updated_at\":\"2023-09-05T02:10:20.000000Z\"}}', NULL, '2023-09-04 18:10:43', '2023-09-04 18:10:43'),
(96, 'default', 'created', 'App\\Models\\User', 'created', 43, 'App\\Models\\User', 39, '{\"attributes\":{\"id\":43,\"first_name\":\"Coby\",\"last_name\":\"Booker\",\"user_level_id\":12,\"email\":\"qufy@mailinator.com\",\"email_verified_at\":null,\"password\":\"$2y$10$xdOqOJVHX7vmssTk.AX0uO5LLDX1P7dJPu8WgUvchk0hvTaH3o1Ny\",\"remember_token\":null,\"status\":1,\"created_at\":\"2023-09-05T02:10:52.000000Z\",\"updated_at\":\"2023-09-05T02:10:52.000000Z\"}}', NULL, '2023-09-04 18:10:52', '2023-09-04 18:10:52'),
(97, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-09-13T08:48:19.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-09-05T01:44:34.000000Z\"}}', NULL, '2023-09-13 00:48:19', '2023-09-13 00:48:19'),
(98, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"9bdKfozLDcUW8RsQD9APnP8a1NqPHjimzJU4TcXICQPowhoZyuqecz7Ed61z\"},\"old\":{\"remember_token\":\"huuHz94DBdP85i5u7kwKN8e9Y9uosPpT9tXmqWkSSEc7BCt7NoqA6BZsWFBS\"}}', NULL, '2023-09-13 00:48:19', '2023-09-13 00:48:19'),
(99, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-09-13T08:48:23.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-09-13T08:48:19.000000Z\"}}', NULL, '2023-09-13 00:48:23', '2023-09-13 00:48:23'),
(100, 'default', 'updated', 'App\\Models\\User', 'updated', 43, 'App\\Models\\User', 39, '{\"attributes\":{\"email\":\"demo@demo.com1\",\"password\":\"$2y$10$NIzcx1PIA8QHF3\\/FO8bhReZnzh8UsrVx2Su0LrXvxs2IuQgSCvNdS\",\"updated_at\":\"2023-09-21T14:04:40.000000Z\"},\"old\":{\"email\":\"qufy@mailinator.com\",\"password\":\"$2y$10$xdOqOJVHX7vmssTk.AX0uO5LLDX1P7dJPu8WgUvchk0hvTaH3o1Ny\",\"updated_at\":\"2023-09-05T02:10:52.000000Z\"}}', NULL, '2023-09-21 06:04:40', '2023-09-21 06:04:40'),
(101, 'default', 'updated', 'App\\Models\\User', 'updated', 43, 'App\\Models\\User', 39, '{\"attributes\":{\"password\":\"$2y$10$QyeLxgbZ0n.bbKtqVlOcq.OeCgUsCa7N9O\\/mB2TBNrzLRtLIY37gW\",\"updated_at\":\"2023-09-21T14:04:48.000000Z\"},\"old\":{\"password\":\"$2y$10$NIzcx1PIA8QHF3\\/FO8bhReZnzh8UsrVx2Su0LrXvxs2IuQgSCvNdS\",\"updated_at\":\"2023-09-21T14:04:40.000000Z\"}}', NULL, '2023-09-21 06:04:48', '2023-09-21 06:04:48'),
(102, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-09-21T14:17:43.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-09-13T08:48:23.000000Z\"}}', NULL, '2023-09-21 06:17:43', '2023-09-21 06:17:43'),
(103, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"YxH0v02ogl0ip1RKmDcKV8WscfNLVE256hrGiRUK2DxqJgIW76DbbeeP2UFj\"},\"old\":{\"remember_token\":\"9bdKfozLDcUW8RsQD9APnP8a1NqPHjimzJU4TcXICQPowhoZyuqecz7Ed61z\"}}', NULL, '2023-09-21 06:17:43', '2023-09-21 06:17:43'),
(104, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-09-21T14:17:48.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-09-21T14:17:43.000000Z\"}}', NULL, '2023-09-21 06:17:48', '2023-09-21 06:17:48'),
(105, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2023-09-28T13:04:29.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-09-21T14:17:48.000000Z\"}}', NULL, '2023-09-28 05:04:29', '2023-09-28 05:04:29'),
(106, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"5eecZAO4y8Ve5y1wSBeaoVisbqItVF3QlfuVrWnqXBFF6x5AI73xqAAIZDJC\"},\"old\":{\"remember_token\":\"YxH0v02ogl0ip1RKmDcKV8WscfNLVE256hrGiRUK2DxqJgIW76DbbeeP2UFj\"}}', NULL, '2023-09-28 05:04:29', '2023-09-28 05:04:29'),
(107, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2023-09-28T13:05:16.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2023-09-28T13:04:29.000000Z\"}}', NULL, '2023-09-28 05:05:16', '2023-09-28 05:05:16'),
(108, 'default', 'updated', 'App\\Models\\User', 'updated', 43, 'App\\Models\\User', 39, '{\"attributes\":{\"password\":\"$2y$10$GQTsB\\/\\/vFg3U4ax71gkcaOH8OQ8zzOj8xiaslCF6m0s2kGfZqf6Bu\",\"updated_at\":\"2023-09-28T13:06:46.000000Z\"},\"old\":{\"password\":\"$2y$10$QyeLxgbZ0n.bbKtqVlOcq.OeCgUsCa7N9O\\/mB2TBNrzLRtLIY37gW\",\"updated_at\":\"2023-09-21T14:04:48.000000Z\"}}', NULL, '2023-09-28 05:06:46', '2023-09-28 05:06:46'),
(109, 'default', 'updated', 'App\\Models\\User', 'updated', 43, 'App\\Models\\User', 39, '{\"attributes\":{\"user_level_id\":11,\"password\":\"$2y$10$M2TDpNaFcL0.FhiZoMRmaORnFGjfcNGY6ghAphMy79sO2tRdOx.Rm\",\"updated_at\":\"2024-04-30T03:21:56.000000Z\"},\"old\":{\"user_level_id\":12,\"password\":\"$2y$10$GQTsB\\/\\/vFg3U4ax71gkcaOH8OQ8zzOj8xiaslCF6m0s2kGfZqf6Bu\",\"updated_at\":\"2023-09-28T13:06:46.000000Z\"}}', NULL, '2024-04-29 19:21:56', '2024-04-29 19:21:56'),
(110, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2024-04-30T09:58:08.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2023-09-28T13:05:16.000000Z\"}}', NULL, '2024-04-30 01:58:08', '2024-04-30 01:58:08'),
(111, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"s6rF8umDA01ai3gym4xX7Q2wkockvnzlz3ICQnmKfTqo3jYRrV4QXCKGhDd7\"},\"old\":{\"remember_token\":\"5eecZAO4y8Ve5y1wSBeaoVisbqItVF3QlfuVrWnqXBFF6x5AI73xqAAIZDJC\"}}', NULL, '2024-04-30 01:58:08', '2024-04-30 01:58:08'),
(112, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2024-04-30T10:00:12.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2024-04-30T09:58:08.000000Z\"}}', NULL, '2024-04-30 02:00:12', '2024-04-30 02:00:12'),
(113, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2024-05-01T05:03:10.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2024-04-30T02:00:12.000000Z\"}}', NULL, '2024-05-01 05:03:10', '2024-05-01 05:03:10'),
(114, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"yCQJ5vO3bTLdd0UgpU7A1ezoGkELKHi5MEutZjI7JiAMiDYUvhLzf1oZGttJ\"},\"old\":{\"remember_token\":\"s6rF8umDA01ai3gym4xX7Q2wkockvnzlz3ICQnmKfTqo3jYRrV4QXCKGhDd7\"}}', NULL, '2024-05-01 05:03:10', '2024-05-01 05:03:10'),
(115, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2024-05-01T05:03:11.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2024-05-01T05:03:10.000000Z\"}}', NULL, '2024-05-01 05:03:11', '2024-05-01 05:03:11'),
(116, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2024-05-01T06:25:02.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2024-05-01T05:03:11.000000Z\"}}', NULL, '2024-05-01 06:25:02', '2024-05-01 06:25:02'),
(117, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"gAchR2GTKyVLQP3NkG64LaIJcDz0FfScVDr7CsgoWp1J89MTIxmjmN9sTkI0\"},\"old\":{\"remember_token\":\"yCQJ5vO3bTLdd0UgpU7A1ezoGkELKHi5MEutZjI7JiAMiDYUvhLzf1oZGttJ\"}}', NULL, '2024-05-01 06:25:02', '2024-05-01 06:25:02'),
(118, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2024-05-01T06:25:43.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2024-05-01T06:25:02.000000Z\"}}', NULL, '2024-05-01 06:25:43', '2024-05-01 06:25:43'),
(119, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2024-05-01T06:38:45.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2024-05-01T06:25:43.000000Z\"}}', NULL, '2024-05-01 06:38:45', '2024-05-01 06:38:45'),
(120, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"o8yxkFiIk0Y6EL4teTvAOeXJqjQGztfWRdG4p95487X4NGHWffr9dhcjErY3\"},\"old\":{\"remember_token\":\"gAchR2GTKyVLQP3NkG64LaIJcDz0FfScVDr7CsgoWp1J89MTIxmjmN9sTkI0\"}}', NULL, '2024-05-01 06:38:45', '2024-05-01 06:38:45'),
(121, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2024-05-01T06:38:50.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2024-05-01T06:38:45.000000Z\"}}', NULL, '2024-05-01 06:38:50', '2024-05-01 06:38:50'),
(122, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2024-05-01T06:39:12.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2024-05-01T06:38:50.000000Z\"}}', NULL, '2024-05-01 06:39:12', '2024-05-01 06:39:12');
INSERT INTO `activity_log` (`id`, `log_name`, `description`, `subject_type`, `event`, `subject_id`, `causer_type`, `causer_id`, `properties`, `batch_uuid`, `created_at`, `updated_at`) VALUES
(123, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"GKQoeV56zCopvEUPyJW1TUyHPCIpE5FZ3M4xVE7GSxVi5h9NsgTtTNBeRMSu\"},\"old\":{\"remember_token\":\"o8yxkFiIk0Y6EL4teTvAOeXJqjQGztfWRdG4p95487X4NGHWffr9dhcjErY3\"}}', NULL, '2024-05-01 06:39:12', '2024-05-01 06:39:12'),
(124, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2024-05-01T06:39:13.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2024-05-01T06:39:12.000000Z\"}}', NULL, '2024-05-01 06:39:13', '2024-05-01 06:39:13'),
(125, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":0,\"updated_at\":\"2024-05-01T06:39:24.000000Z\"},\"old\":{\"status\":1,\"updated_at\":\"2024-05-01T06:39:13.000000Z\"}}', NULL, '2024-05-01 06:39:24', '2024-05-01 06:39:24'),
(126, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"remember_token\":\"MUQ9veAh1NMv47CxfAq7OGHRemUVjfhMlJCaAT2chh1OfjkruxW6bFQTcSUi\"},\"old\":{\"remember_token\":\"GKQoeV56zCopvEUPyJW1TUyHPCIpE5FZ3M4xVE7GSxVi5h9NsgTtTNBeRMSu\"}}', NULL, '2024-05-01 06:39:24', '2024-05-01 06:39:24'),
(127, 'default', 'updated', 'App\\Models\\User', 'updated', 39, 'App\\Models\\User', 39, '{\"attributes\":{\"status\":1,\"updated_at\":\"2024-05-01T06:39:27.000000Z\"},\"old\":{\"status\":0,\"updated_at\":\"2024-05-01T06:39:24.000000Z\"}}', NULL, '2024-05-01 06:39:27', '2024-05-01 06:39:27');

-- --------------------------------------------------------

--
-- Table structure for table `couriers`
--

CREATE TABLE `couriers` (
  `id` int NOT NULL,
  `courier_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courier_description` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `status` int NOT NULL DEFAULT '1',
  `deleted` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `couriers`
--

INSERT INTO `couriers` (`id`, `courier_name`, `courier_description`, `status`, `deleted`, `created_at`, `updated_at`) VALUES
(1, 'Courier 1', 'UPS Description', 1, 0, '2024-05-01 06:42:56', '2024-05-01 06:42:56'),
(2, 'Courier 2', 'UPS Description edited', 1, 0, '2024-05-01 06:43:03', '2024-05-01 06:43:03');

-- --------------------------------------------------------

--
-- Table structure for table `crm_logs`
--

CREATE TABLE `crm_logs` (
  `id` int NOT NULL,
  `module_name` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `action` mediumtext COLLATE utf8mb4_unicode_ci,
  `user_id` int DEFAULT NULL,
  `user_name` mediumtext COLLATE utf8mb4_unicode_ci,
  `affected_row_copy` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `crm_logs`
--

INSERT INTO `crm_logs` (`id`, `module_name`, `action`, `user_id`, `user_name`, `affected_row_copy`, `created_at`, `updated_at`, `deleted`) VALUES
(1, 'Manage couriers', 'courierAdd', NULL, NULL, '{\"courier_name\":\"Courier 1\",\"courier_description\":\"UPS Description\",\"status\":\"1\",\"updated_at\":\"2024-05-01T06:42:56.000000Z\",\"created_at\":\"2024-05-01T06:42:56.000000Z\",\"id\":1}', '2024-05-01 06:42:56', '2024-05-01 06:42:56', 0),
(2, 'Manage couriers', 'courierAdd', NULL, NULL, '{\"courier_name\":\"Courier 2\",\"courier_description\":\"UPS Description edited\",\"status\":\"1\",\"updated_at\":\"2024-05-01T06:43:03.000000Z\",\"created_at\":\"2024-05-01T06:43:03.000000Z\",\"id\":2}', '2024-05-01 06:43:03', '2024-05-01 06:43:03', 0),
(3, 'Manage deliveries', 'deliveryAdd', NULL, NULL, '{\"courier_id\":1,\"date_to_be_delivered\":\"2024-05-18T14:43\",\"delivery_note\":\"123\",\"status\":\"1\",\"updated_at\":\"2024-05-01T06:43:25.000000Z\",\"created_at\":\"2024-05-01T06:43:25.000000Z\",\"id\":1}', '2024-05-01 06:43:25', '2024-05-01 06:43:25', 0),
(4, 'Manage deliveries', 'deliveryAdd', NULL, NULL, '{\"courier_id\":2,\"date_to_be_delivered\":\"2024-05-01T14:43\",\"delivery_note\":\"22\",\"status\":\"1\",\"updated_at\":\"2024-05-01T06:43:34.000000Z\",\"created_at\":\"2024-05-01T06:43:34.000000Z\",\"id\":2}', '2024-05-01 06:43:34', '2024-05-01 06:43:34', 0);

-- --------------------------------------------------------

--
-- Table structure for table `deliveries`
--

CREATE TABLE `deliveries` (
  `id` int NOT NULL,
  `courier_id` bigint NOT NULL,
  `delivery_note` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_to_be_delivered` timestamp NOT NULL,
  `status` int NOT NULL DEFAULT '1',
  `deleted` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `deliveries`
--

INSERT INTO `deliveries` (`id`, `courier_id`, `delivery_note`, `date_to_be_delivered`, `status`, `deleted`, `created_at`, `updated_at`) VALUES
(1, 1, '123', '2024-05-18 06:43:00', 1, 0, '2024-05-01 06:43:25', '2024-05-01 06:43:25'),
(2, 2, '22', '2024-05-01 06:43:00', 0, 0, '2024-05-01 06:43:34', '2024-05-01 06:43:34');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_03_22_144618_create_permission_tables', 1),
(5, '2021_04_14_044507_create_settings_table', 1),
(6, '2021_06_15_022916_create_user_infos_table', 1),
(7, '2021_06_23_041411_create_activity_log_table', 1),
(8, '2021_06_23_041412_add_event_column_to_activity_log_table', 1),
(9, '2021_06_23_041413_add_batch_uuid_column_to_activity_log_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `queue`
--

CREATE TABLE `queue` (
  `id` int NOT NULL,
  `queue_number` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_number` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `form_id` int DEFAULT NULL,
  `data` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_level_id` int NOT NULL DEFAULT '1',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `user_level_id`, `email`, `email_verified_at`, `password`, `remember_token`, `status`, `created_at`, `updated_at`) VALUES
(39, 'Meda', 'Bednar', 1, 'demo@demo.com', '2023-07-26 22:55:07', '$2y$10$4nN30crU5hx9FAguAsh7putr9GL0swDpAvIpGckDybiKL5RveOl4y', 'MUQ9veAh1NMv47CxfAq7OGHRemUVjfhMlJCaAT2chh1OfjkruxW6bFQTcSUi', 1, '2023-07-26 22:55:07', '2024-05-01 06:39:27');

-- --------------------------------------------------------

--
-- Table structure for table `user_infos`
--

CREATE TABLE `user_infos` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `avatar` text COLLATE utf8mb4_unicode_ci,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `language` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timezone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `communication` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `marketing` tinyint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `user_infos`
--

INSERT INTO `user_infos` (`id`, `user_id`, `avatar`, `company`, `phone`, `website`, `country`, `language`, `timezone`, `currency`, `communication`, `marketing`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, 'Howell Group', '+1 (614) 382-5554', 'https://www.bernier.com/rerum-ab-quod-dignissimos-eos-velit-quasi', 'AS', 'sa', NULL, NULL, NULL, NULL, '2023-06-30 02:11:28', '2023-06-30 02:11:28'),
(2, 25, NULL, 'Schoen-Windler', '+1-623-812-6567', 'http://casper.com/alias-reiciendis-molestiae-eos-molestiae', 'HK', 'mt', NULL, NULL, NULL, NULL, '2023-07-25 01:40:52', '2023-07-25 01:40:52'),
(3, 39, NULL, 'Mraz and Sons', '+15702889791', 'http://www.romaguera.info/incidunt-id-et-et-illum-quam-quia', 'CD', 'ch', NULL, NULL, NULL, NULL, '2023-07-26 22:55:07', '2023-07-26 22:55:07');

-- --------------------------------------------------------

--
-- Table structure for table `user_levels`
--

CREATE TABLE `user_levels` (
  `id` int NOT NULL,
  `name` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted` int NOT NULL DEFAULT '0',
  `n1_crm` int NOT NULL DEFAULT '1',
  `n1_tools` int NOT NULL DEFAULT '1',
  `n2_users` int NOT NULL DEFAULT '1',
  `n2_user_roles` int NOT NULL DEFAULT '1',
  `n2_dashboard` int NOT NULL DEFAULT '1',
  `n2_forms` int NOT NULL DEFAULT '1',
  `n2_crm_logs` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_levels`
--

INSERT INTO `user_levels` (`id`, `name`, `created_at`, `updated_at`, `deleted`, `n1_crm`, `n1_tools`, `n2_users`, `n2_user_roles`, `n2_dashboard`, `n2_forms`, `n2_crm_logs`) VALUES
(1, 'Administrator Test', '2023-07-03 05:15:50', '2023-09-28 05:12:44', 0, 1, 1, 1, 1, 1, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_log`
--
ALTER TABLE `activity_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject` (`subject_type`,`subject_id`),
  ADD KEY `causer` (`causer_type`,`causer_id`),
  ADD KEY `activity_log_log_name_index` (`log_name`);

--
-- Indexes for table `couriers`
--
ALTER TABLE `couriers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `crm_logs`
--
ALTER TABLE `crm_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deliveries`
--
ALTER TABLE `deliveries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courier` (`courier_id`),
  ADD KEY `active` (`status`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `queue`
--
ALTER TABLE `queue`
  ADD PRIMARY KEY (`id`),
  ADD KEY `form_id` (`form_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `settings_key_index` (`key`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_infos`
--
ALTER TABLE `user_infos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_levels`
--
ALTER TABLE `user_levels`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_log`
--
ALTER TABLE `activity_log`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `couriers`
--
ALTER TABLE `couriers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `crm_logs`
--
ALTER TABLE `crm_logs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `deliveries`
--
ALTER TABLE `deliveries`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `user_infos`
--
ALTER TABLE `user_infos`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_levels`
--
ALTER TABLE `user_levels`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
