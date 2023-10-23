# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


本项目旨在是学习React语法和全家桶及周边生态
基于 React + less + Element-Plus 搭建的项目

## Available Scripts

In the project directory, you can run:
```sh
# 配置
1. node 版本 18+
2. pnpm 版本 8.x
```

```sh
# 安装依赖
pnpm install
```

### Compile and Hot-Reload for Development

```sh
# 启动服务
npm start
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Git Commit规范

```sh
feat: 新功能(feature)
fix: 修复(bug fix)
docs: 修改文档 (documentation)
style: 代码格式(不影响代码运行的变动)
refactor: 代码重构(即不是新增功能，也不是修改bug的代码变动)
perf: 改善性能(即优化相关代码或性能)
revert: 代码回退
test: 增加测试
chore: 构建过程或辅助工具的变动
```

### 目录结构

```bash
├─ .husky                # 用户提交代码时格式化代码
├─ .vscode               # vscode 配置和拓展
├─ public
│  └─ favicon.ico
├─ src
│  ├─ api                # api 接口
│  ├─ assets             # 静态资源
│  ├─ caches             # 本地缓存
│  ├─ components         # 全局组件
│  ├─ directives         # 全局指令
│  ├─ hooks              # 全局hook
│  ├─ http               # axios配置
│  ├─ icons              # svg icon
│  ├─ interface          # ts接口类型声明
│  ├─ plugins            # 全局插件
│  ├─ directives         # 全局指令
│  ├─ router             # 路由
│  ├─ store              # pinia store
│  ├─ styles             # 全局样式
│  ├─ utils              # 全局公共方法
│  └─ views              # 所有页面
│  │   ├── Home              # 首页
│  │   ├── Layout            # 布局组件
│  │   │   ├── LayoutHeader      # 头部导航
│  │   │   ├── LayoutNavMenu     # 左侧菜单栏
│  │   │   ├── LayoutMain        # 主页面内容
│  │   │   ├── MainTags          # 主页面页签
│  │   │   └── MenuNavBar        # MenuNav组件
│  │   ├── Error             # 错误页面
│  │   ├── Login             # 登录页面
│  │   ├── UserManage        # 用户管理页面
│  │   │   ├── organization      # 组织管理页面
│  │   │   ├── flowpath          # 流程管理页面
│  │   │   └── permission        # 权限管理页面
│  │   ├── TablePlus         # 自定义表格页面
│  │   ├── task              # 我的任务页面
│  │   └── monitor           # 项目监控页面
│  ├─ App.vue            # 入口页面
│  └─ main.ts            # 入口文件
├─ tests                 # 单元测试
├─ types                 # ts 声明
├─ .env.development      # 开发环境
├─ .env.production       # 正式环境
├─ .env.staging          # 预发布环境
├─ .eslintrc.js          # eslint配置
├─ .gitignore            # git push忽略文件
├─ .prettierignore       # prettier忽略文件
├─ .prettierrc           # prettier配置
├─ tailwind.config.js    # tailwind配置
├─ tsconfig.json         # ts 编译配置
└─ vite.config.ts        # vite 配置
```


/*
 *                                |~~~~~~~|
 *                                |       |
 *                                |       |
 *                                |       |
 *                                |       |
 *                                |       |
 *     |~.\\\_\~~~~~~~~~~~~~~xx~~~         ~~~~~~~~~~~~~~~~~~~~~/_//;~|
 *     |  \  o \_         ,XXXXX),                         _..-~ o /  |
 *     |    ~~\  ~-.     XXXXX`)))),                 _.--~~   .-~~~   |
 *      ~~~~~~~`\   ~\~~~XXX' _/ ';))     |~~~~~~..-~     _.-~ ~~~~~~~
 *               `\   ~~--`_\~\, ;;;\)__.---.~~~      _.-~
 *                 ~-.       `:;;/;; \          _..-~~
 *                    ~-._      `''        /-~-~
 *                        `\              /  /
 *                          |         ,   | |
 *                           |  '        /  |
 *                            \/;          |
 *                             ;;          |
 *                             `;   .       |
 *                             |~~~-----.....|
 *                            | \             \
 *                           | /\~~--...__    |
 *                           (|  `\       __-\|
 *                           ||    \_   /~    |
 *                           |)     \~-'      |
 *                            |      | \      '
 *                            |      |  \    :
 *                             \     |  |    |
 *                              |    )  (    )
 *                               \  /;  /\  |
 *                               |    |/   |
 *                               |    |   |
 *                                \  .'  ||
 *                                |  |  | |
 *                                (  | |  |
 *                                |   \ \ |
 *                                || o `.)|
 *                                |`\\) |
 *                                |       |
 *                                |       |
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *                               耶稣 欢迎光临
 */
