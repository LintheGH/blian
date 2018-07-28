-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.5-10.0.14-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 userdata 的数据库结构
DROP DATABASE IF EXISTS `userdata`;
CREATE DATABASE IF NOT EXISTS `userdata` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `userdata`;


-- 导出  表 userdata.car 结构
DROP TABLE IF EXISTS `car`;
CREATE TABLE IF NOT EXISTS `car` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `iteminfo` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `username` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`indexid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  userdata.car 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
REPLACE INTO `car` (`indexid`, `iteminfo`, `username`) VALUES
	(1, '{"200":6}', ''),
	(2, '{"200":7}', 'admin123'),
	(3, '{"200":12,"245":2,"246":2,"247":1,"248":1,"251":1,"252":4,"253":9}', 'admin123');
/*!40000 ALTER TABLE `car` ENABLE KEYS */;


-- 导出  表 userdata.products 结构
DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `id` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT '商品编号',
  `band` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '品牌',
  `title` varchar(200) CHARACTER SET utf8 NOT NULL COMMENT '标题',
  `price` float NOT NULL DEFAULT '0' COMMENT '价格',
  `sellprice` float NOT NULL DEFAULT '0' COMMENT '参考价格',
  `sellnumber` int(20) NOT NULL DEFAULT '0' COMMENT '销量',
  `picture` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT '路径',
  `bigpicture` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT '大图路径',
  `number` int(255) NOT NULL DEFAULT '9999' COMMENT '库存',
  `description` varchar(200) CHARACTER SET utf8 NOT NULL COMMENT '描述',
  `collect` int(255) NOT NULL DEFAULT '0' COMMENT '收藏数',
  `comment` int(255) NOT NULL DEFAULT '0' COMMENT '评论数',
  `goodcomment` int(255) NOT NULL DEFAULT '0' COMMENT '好评数',
  `type` int(11) NOT NULL COMMENT '1.自营 2.联营',
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1.正常 0.异常',
  PRIMARY KEY (`indexid`)
) ENGINE=InnoDB AUTO_INCREMENT=298 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  userdata.products 的数据：~54 rows (大约)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
REPLACE INTO `products` (`indexid`, `id`, `band`, `title`, `price`, `sellprice`, `sellnumber`, `picture`, `bigpicture`, `number`, `description`, `collect`, `comment`, `goodcomment`, `type`, `status`) VALUES
	(200, '302001449157', 'apple', '【官方授权】apple xinkuan wuxian蓝牙鼠标（黑）asdfsadfasdfadsf', 300, 499, 121, '../img/goodslist/goods-test2.jpg', '../img/goodslist/goods-test2-big.jpg', 9999, '支持蓝牙并装有 OS X v10.11 或更新版本操作系统skjdlf jasdfasdlkjfas', 132, 398, 189, 2, 1),
	(245, '302001499158', 'apple', 'JBL T450BT 无线蓝牙 头戴式耳机 手机耳机 音乐耳机 游戏耳机 珍珠白', 398, 599, 34, '../img/goodslist/goods-test.jpg', '../img/goodslist/goods-test-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 23, 30, 26, 1, 1),
	(246, '302001499158', 'apple', '【官方授权】Beats PowerBeats3 by Dr. Dre Wireless 蓝牙无线 运动耳机 手机耳机 游戏耳机 - 黑色 ML8V2PA/A', 988, 1189, 24, '../img/goodslist/goods-test2.jpg', '../img/goodslist/goods-test2-big.jpg', 9999, '', 10, 14, 7, 1, 1),
	(247, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1488, 1688, 43, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 76, 45, 32, 1, 1),
	(248, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1488, 1688, 43, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 76, 45, 32, 1, 1),
	(249, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 328, 599, 54, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 23, 30, 26, 1, 1),
	(250, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1488, 1688, 43, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 76, 45, 32, 1, 1),
	(251, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1488, 1688, 43, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 76, 45, 32, 1, 1),
	(252, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 328, 599, 54, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 23, 30, 26, 1, 1),
	(253, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 328, 599, 54, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 23, 30, 26, 1, 1),
	(254, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1488, 1688, 43, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 76, 45, 32, 1, 1),
	(255, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 328, 599, 54, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 23, 30, 26, 1, 1),
	(256, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1488, 1688, 43, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 76, 45, 32, 1, 1),
	(257, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 328, 599, 54, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 23, 30, 26, 1, 1),
	(258, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 643, 843, 21, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 76, 14, 6, 1, 1),
	(259, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 543, 843, 44, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 34, 44, 44, 1, 1),
	(260, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 643, 843, 21, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 76, 14, 6, 1, 1),
	(261, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 543, 843, 44, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 34, 44, 44, 1, 1),
	(262, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 643, 843, 21, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 76, 14, 6, 1, 1),
	(263, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 543, 843, 44, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 34, 44, 44, 1, 1),
	(264, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 899, 1099, 12, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 76, 4, 2, 1, 1),
	(265, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 799, 999, 33, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 21, 22, 21, 1, 1),
	(266, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 899, 1099, 12, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 76, 4, 2, 1, 1),
	(267, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 799, 999, 33, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 21, 22, 21, 1, 1),
	(268, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 899, 1099, 12, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 76, 4, 2, 1, 1),
	(269, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 799, 999, 33, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 21, 22, 21, 1, 1),
	(270, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1049, 1499, 43, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 2, 31, 4, 1, 1),
	(271, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 999, 1299, 20, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 12, 15, 9, 1, 1),
	(272, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1049, 1499, 43, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 2, 31, 4, 1, 1),
	(273, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 999, 1299, 20, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 12, 15, 9, 1, 1),
	(274, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1049, 1499, 43, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 2, 31, 4, 1, 1),
	(275, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 999, 1299, 20, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 12, 15, 9, 1, 1),
	(276, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1049, 1499, 43, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 2, 31, 4, 1, 1),
	(277, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 999, 1299, 20, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 12, 15, 9, 1, 1),
	(278, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1399, 1599, 32, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 21, 32, 20, 1, 1),
	(279, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 1999, 2099, 77, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 8, 51, 23, 1, 1),
	(280, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1399, 1599, 32, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 21, 32, 20, 1, 1),
	(281, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 1999, 2099, 77, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 8, 51, 23, 1, 1),
	(282, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1399, 1599, 32, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 21, 32, 20, 1, 1),
	(283, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 1999, 2099, 77, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 8, 51, 23, 1, 1),
	(284, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1399, 1599, 32, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 21, 32, 20, 1, 1),
	(285, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 1999, 2099, 77, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 8, 51, 23, 1, 1),
	(286, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1399, 1599, 32, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 21, 32, 20, 1, 1),
	(287, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 1999, 2099, 77, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 8, 51, 23, 1, 1),
	(288, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1399, 1599, 32, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 21, 32, 20, 1, 1),
	(289, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 1999, 2099, 77, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 8, 51, 23, 1, 1),
	(290, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1399, 1599, 32, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 21, 32, 20, 1, 1),
	(291, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 1999, 2099, 77, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 8, 51, 23, 1, 1),
	(292, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1399, 1599, 32, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 21, 32, 20, 1, 1),
	(293, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 1999, 2099, 77, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 8, 51, 23, 1, 1),
	(294, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1399, 1599, 32, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 21, 32, 20, 1, 1),
	(295, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 1999, 2099, 77, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 8, 51, 23, 1, 1),
	(296, '302001499158', 'apple', '【官方授权】Beats Solo3 Wireless 头戴式 蓝牙无线耳机 手机耳机 游戏耳机 - 金色 MNER2PA/A', 1399, 1599, 32, '../img/goodslist/goods-test5.jpg', '../img/goodslist/goods-test5-big.jpg', 9999, '', 21, 32, 20, 1, 1),
	(297, '302001499158', 'apple', '缤特力 M180 商务蓝牙耳机 通用型 耳挂式 金色', 1999, 2099, 77, '../img/goodslist/goods-test4.jpg', '../img/goodslist/goods-test4-big.jpg', 9999, '头戴式 无线蓝牙耳机 超长续航 强劲低音', 8, 51, 23, 1, 1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;


-- 导出  表 userdata.students 结构
DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `gender` int(11) NOT NULL DEFAULT '0' COMMENT '1男 0女',
  `age` int(11) NOT NULL DEFAULT '0',
  `phone` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `address` varchar(200) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  PRIMARY KEY (`indexid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  userdata.students 的数据：~17 rows (大约)
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
REPLACE INTO `students` (`indexid`, `name`, `gender`, `age`, `phone`, `address`) VALUES
	(1, 'Tom', 1, 22, '13800130000', '元岗路慧通产业园'),
	(2, 'Sam', 1, 24, '13860130000', '元岗路慧通产业园'),
	(3, 'Lucy', 0, 20, '13860130870', '元岗路慧通产业园'),
	(4, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(5, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(6, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(7, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(8, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(9, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(10, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(11, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(12, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(13, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(14, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(15, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(16, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(17, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(18, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(19, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园'),
	(20, 'Nancy', 0, 21, '13860168370', '元岗路慧通产业园');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;


-- 导出  表 userdata.users 结构
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `password` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1.正常 0.异常',
  `phone` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  userdata.users 的数据：~5 rows (大约)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`indexid`, `username`, `password`, `status`, `phone`) VALUES
	(1, 'admin123', 'admin123', 1, '13800138000'),
	(15, '12313', '', 1, ''),
	(16, '', '', 1, ''),
	(17, 'adfadsf', '12345678', 1, '13500000000'),
	(18, 'asdfghjk', 'qwertyui', 1, '13500000000'),
	(19, 'asdfgh', '12345678', 1, '13500000000');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
