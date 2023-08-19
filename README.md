<p align="center">
  <h1 align="center">Slight Sweet</h1>
</p>
</br>
<p align="center">
  潮流趣味的搭子文化社区
</p>

## 🖥 环境支持

- 微信小程序
- 服务器

## 📦 开发流程

克隆项目后，进入根目录安装依赖，然后只运行后端dev:server, 只运行微信小程序dev:wapp ，都运行的话简单，就是dev：

```bash
npm i
```

和

```bash
npm run dev
```

## 项目结构

项目是 monorepos 架构，所有 slightsweet 项目的代码和服务都放在 packages 下开发，分别有：

- wapp - 使用 taro 搭建的 小程序项目， C 端界面
- server - 使用 koa.js 搭建的后端项目，功能是提供 api 接口服务
- 数据库使用 mongodb
