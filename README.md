# Simpfun Wiki
[简体中文](README.md) [English](EN.md)

欢迎您来到 Simpfun 社区维基！

此维基用爱驱动！

欢迎您加入我们的编辑。

## 网站

主域名：

[https://simpdoc.top/](https://simpdoc.top/)

备用域名：

[https://zxp.simpfun.me/](https://zxp.simpfun.me/)

[https://sfe.zxpweb.link/](https://sfe.zxpweb.link/)

## 贡献者

<a href="https://github.com/ZengXiaoPi/Simpfun_Wiki/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ZengXiaoPi/Simpfun_Wiki" />
</a>

## LICENSE

[MIT](https://github.com/ZengXiaoPi/Simpfun_Wiki/blob/main/LICENSE)

## 本地开发

环境要求：Node.js 20 或更高版本（推荐 LTS）。

```bash
# 安装依赖
npm install

# 启动本地开发服务器（默认 http://localhost:3000）
npm start

# 构建生产版本到 build/ 目录
npm run build

# 本地预览构建产物
npm run serve
```

构建时启用了断链检查（`onBrokenLinks` / `onBrokenMarkdownLinks` 均为 `throw`），任何死链都会导致构建失败，请在提交前确认链接可用。