## Bitbank 前端项目
> webpack4
> typescript
> eslint
> vue

多模板多html入口 typescrip vue 项目。
No babel, Only typescript. Faster

### Start
推荐使用 yarn 来做node包管理，用法参照 https://yarn.bootcss.com/
```shell
yarn install
yarn run dev
yarn run build
```

### 项目目录结构
```
.
|-- dist                             // 编译后文件目录
|-- src                              // 源码目录
|   |-- assets                       // 各种资源文件
|       |-- scss                    // 样式表文件夹
|           |-- app.scss             // scss 样式入口文件
|       |-- images                   // 静态图片文件夹
|       |-- fonts                    // 字体文件夹
|   |-- build                       // webpack 打包配置文件夹
|   |-- components                   // 公共组件
|       |--                
|   |-- entries                        // 入口文件目录
|       |-- home.js                    
|   |-- views                        // 页面组件
|       |-- kline.vue                    
|   |-- routes                       // 路由配置和程序的基本信息配置
|       |-- kline.js                 // 配置页面路由
|   |-- templates                     // html模板目录
|       |-- home.html
|   |-- store                        // vuex的状态管理
|   |-- utils                       // 公共方法
|       |-- 
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息
.
```

### 项目规范
- 1. 文件全小写, 多个单词之间用-连接
- 2. html (class, id) 全小写, 多个单词之间用-连接
- 3. vue 相关规范参照 https://youzan.github.io/vant/#/zh-CN/style-guide
- 4. 禁止使用style scoped
- 5. 项目中直接使用设计图标注的px, 插件会自动转rem. 如果不需要转rem的在后面加上注释 /* no */
- 6. 禁止到处使用any, 需要标注typescript具体数据类型
- 7. 使用vue event bus注册的$on必须在组件销毁时$off注销
- 8. mixins模块只能使用 destroy 钩子, vue单文件组件只能使用 beforeDestroy 钩子. 以避免 extends 继承出错

### 项目说明

  - 项目根据 build/config.json 里的 layouts 来生成多个静态 html 文件，生成的 html 文件位于 dist/[env]/[name]/index.html，可以根据不同的功能模块来生成相对独立的 html 文件。
  - 多语言使用 vue-i18n 来实现，参考文档 https://kazupon.github.io/vue-i18n/zh/introduction.html

### Nginx 配置样例

### 推荐vscode插件

  - Auto Close Tag
  - Beautify
  - ESlint
  - Path Autocomplete
  - Sass
  - Prettier - Code formatter
  - Vetur
  - vue-i18n-ally: vue-i18n 多语言助手vscode插件，用于管理多语言翻译词条


推荐vscode用户自动定义设置
```json
    "search.followSymlinks": false,
    "extensions.ignoreRecommendations": true,
    "emmet.syntaxProfiles": {
        "vue-html": "html",
        "vue": "html"
    },
    "eslint.options": {
        "plugins": [
            "html"
        ]
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        { "language": "vue", "autoFix": true }
    ],
    "prettier.singleQuote": true,
    "prettier.semi": true,
    "explorer.confirmDelete": true,
    "terminal.integrated.shell.osx": "/bin/bash",
    "editor.tabSize": 2,
    "search.location": "sidebar",
    "files.watcherExclude": {
    },
    "window.zoomLevel": 0,
    "path-autocomplete.pathMappings": {
        "@": "${folder}/src"
    },
    "javascript.preferences.quoteStyle": "single",
    "vetur.experimental.templateInterpolationService": true,
    "vetur.format.defaultFormatterOptions": {
        "prettier": {
            "semi": true,
            "singleQuote": true
        },
        "prettyhtml": {
            "printWidth": 100,
            "singleQuote": false,
            "wrapAttributes": false,
            "sortAttributes": true,
            "tabWidth": 2
        }
    },
    "path-autocomplete.extensionOnImport": true,
    "extensions.autoUpdate": false,
    "editor.snippetSuggestions": "top",
    "emmet.showSuggestionsAsSnippets": true,
    "editor.tabCompletion": "on",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "vetur.format.defaultFormatter.ts": "vscode-typescript",
    "vetur.useWorkspaceDependencies": true,
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "html.format.endWithNewline": true,
    "html.format.indentHandlebars": true,
    "html.format.wrapAttributes": "aligned-multiple"

```
