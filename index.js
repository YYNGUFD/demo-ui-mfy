/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Mfy
 * @Date: 2020-11-18 18:46:52
 * @LastEditors: Mfy
 * @LastEditTime: 2020-11-18 18:54:20
 */
let Koa = require('koa');
let KoaRouter = require('koa-router');
const fs = require('fs')
const path = require('path')
 
const app = new Koa();
const router = new KoaRouter();

app.use(async (ctx,next)=>{ 
  ctx.type = "html";
  ctx.body = fs.createReadStream(path.join(__dirname, "./views", "index.html"));
  next();
})
app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods()) // 允许使用路由的方法

// 3. 监听端口
app.listen('5250', () => {
  console.log('服务器启动成功'); 
  console.log('http://localhost:5250'); 
})