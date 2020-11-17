

## 定义 
* 应用开发工具。
* 基于ESM: ES module，面向现代浏览器。

## 由来
webpack对复杂应用不够丝滑。
1. 冷启动时间长。
2. HMR 热更新的反应速度 慢。

## 初始化项目
```
npm init vite-app project-name
cd project-name
npm i
npm run dev
```

## 对比差异
* 冷启动时：webpack, 启动webServer, webServer的build过程(在内存中打包一遍)太慢。
* 冷启动时：vite, 只启动一个webServer。即时编译、按需编译

## vite核心功能
static server(koa) + compile + HMR