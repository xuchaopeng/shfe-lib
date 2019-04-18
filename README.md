<<<<<<< HEAD
# 嵩恒前端 CLI

针对公司业务使用`webpack4.x`和`babel7.x`整理的一个主要针对 H5 页面开发的脚手架，如果 PC 项目对 IE 兼容要求不高，也可以使用。

## 特点

- 支持代码合并压缩、图片压缩、图片 base64、autoprefixer、代码版本控制；
- 支持 es6、sass；
- 支持热更新、tree-shaking 等；
- 支持 eslint 代码校验、prettier 代码风格；
- 支持业务代码和公共代码、webpack 运行时代码分离（最大化的利用浏览器缓存）；
- 支持开发、预发布、上线环境分离。

## 使用方法

```bash
# 将项目clone下来
git clone http://codeio.dftoutiao.com/RESEARCH/shfe-cli.git my-project
cd my-project

# 切换到对应的脚手架分支
# 如果是单页应用：
git checkout -b spa origin/spa
# 如果是多页应用：
git checkout -b mpa origin/mpa

# 删除.git文件
rm -rf .git
# 重新git初始化、添加、提交代码
git init
git add .
git commit -m 'init'
# 添加远程新项目仓库地址
git remote add origin <新项目仓库地址>
# 提交代码
git push -u origin master
```

### SPA

单页面 CLI 请切换分支到`spa`，点击查看：[SPA](http://codeio.dftoutiao.com/RESEARCH/shfe-cli/src/spa)

### MPA

多页面 CLI 请切换分支到`mpa`，点击查看：[MPA](http://codeio.dftoutiao.com/RESEARCH/shfe-cli/src/mpa)

## 问题反馈

[提工单（issue）](http://codeio.dftoutiao.com/RESEARCH/shfe-cli/issues/new) 或 [提合并请求（PR）](http://codeio.dftoutiao.com/RESEARCH/shfe-cli/pulls)
=======
# SPA

基于 webpack4 的单页面应用框架

## 使用说明

```bash
# 开发
npm run dev # 或 npm start

# 预发布（用于上测试服）打包
npm run pre

# 上线打包
npm run build
# 上线打包可视化分析
npm run builda

# 代码格式校验
npm run lint

# 代码格式自动修复
npm run fix
```

**注意：代码构建过程中 webpack 会注入三个全局变量（原则上只要使用 PRODUCTION 即可）**

- PRODUCTION: true 表示上线环境
- DEVELOPMENT: true 表示开发环境
- PREPRODUCTION: true 表示预发布环境

## 目录结构说明

```bash
.
├── .eslintrc.js  # eslint配置文件
├── .prettierrc.js  # prettier配置文件
├── build # webpack配置文件目录
│   ├── config.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── dist # 上线打包目录
├── pre # 预发布打包目录
├── static # 资源目录（有些公共资源不方便通过js引入，直接通过html引入的时候，可以放到这个目录（如 shareinstall），目录结构参考打包后目录结构）
└── src # 源码目录
    ├── api # 公共接口、日志处理目录（代码组织方式供参考）
    │   ├── config.js
    │   ├── data.js
    │   ├── index.js
    │   └── log.js
    ├── common  # 公共资源目录
    │   ├── css # 公共样式资源
    │   │   ├── _base.scss
    │   │   ├── _common.scss
    │   │   ├── _index.scss
    │   │   └── _mixin.scss
    │   └── js  # 公共js资源
    │       ├── SL-es.js
    │       ├── SLAPP-es.js
    │       └── responsive.js
    ├── css # 页面css
    │   └── index.scss
    ├── img # 图片
    ├── index.html  # 入口模板
    └── js  # 业务js目录
        ├── index.js  # 入口js
        ├── math.js
        └── print.js
```

**注意：入口模板和入口 js 请不要改名，如需改名，需要修改 webpack 配置**

## 浏览器兼容

原则上是根据 `package.json` 中 `browserslist` 配置来打包兼容，未详细测试验证，如发现有问题，请提 issue 或 pr

```json
// package.json中配置
{
  "browserslist": [">= 1%", "last 2 version", "iOS >= 8", "Android >= 4.4"]
}
```

```bash
# 查看结果
npx browserslist

and_chr 69
and_ff 62
and_qq 1.2
and_uc 11.8
android 67
android 4.4.3-4.4.4
android 4.4
baidu 7.12
bb 10
bb 7
chrome 69
chrome 68
edge 17
edge 16
firefox 62
firefox 61
ie 11
ie 10
ie_mob 11
ie_mob 10
ios_saf 11.3-11.4
ios_saf 11.0-11.2
ios_saf 10.3
ios_saf 10.0-10.2
ios_saf 9.3
ios_saf 9.0-9.2
ios_saf 8.1-8.4
ios_saf 8
op_mini all
op_mob 46
op_mob 12.1
opera 55
opera 54
safari 12
safari 11.1
samsung 7.2
samsung 6.2
```

## 贡献

如发现有 bug 或有更好的 idea，欢迎提 PR。
>>>>>>> 9cf35395a1ba8024c4f391966b6b5e7c65708274
