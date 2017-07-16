// http://blog.csdn.net/z_sherry/article/details/64920239
// 第 1 种方式 @yypes/包名 安装
// @types的使用(推荐)：
// 在自己的项目目录下运行：
// npm install @types/库名  –-save 
// 得到node_module文件夹：
/// <reference types="bootstrap"/>

// 第 2 种方式 tpings 安装
// npm install typings --global
// typings search --name jquery
// typings install dt~jquery --global --save
// 注意：这里的dt是步骤2中search得到的信息里，source下的名称 
// typings list //验证是否安装成功
/// <reference path="./typings/globals/jquery/index.d.ts" />


$('#div').css('width',100);
$('#div').carousel();
$('.dropdown-toggle').dropdown()