## 使用vscode编译ts
1. 更新vscode至最新版本，`Shift+Ctrl+B` 默认自动配置并编译ts。若没有编译成功，在项目根目录配置 `.vscode\tasks.json`
``` json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "type": "typescript",
            "tsconfig": "tsconfig.json",
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```
2. 若要使用node测试编译后的js。按`F5`并选择Node.js环境，`Shift+Ctrl+F5`强制重新启动Node.js
3. 按`Shift+Ctrl+Y`在控制台查看输出
4. `TODO`：运用gulp等自动化构建

## 在项目中使用其他tsd库的`*.d.ts`智能提示功能
1. demo移步[app.ts](https://github.com/ReySun/typescript/blob/master/app.ts)

## 特殊说明
1. 项目下的`typescript demo`大部分来自`广发证券`的书籍[《揭秘Angular 2》](https://www.amazon.cn/%E6%8F%AD%E7%A7%98Angular-2-%E5%B9%BF%E5%8F%91%E8%AF%81%E5%88%B8%E4%BA%92%E8%81%94%E7%BD%91%E9%87%91%E8%9E%8D%E6%8A%80%E6%9C%AF%E5%9B%A2%E9%98%9F/dp/B01NBOQCJW/ref=sr_1_fkmr1_1?ie=UTF8&qid=1500181400&sr=8-1-fkmr1&keywords=angular-2-step-by-step-)，部分来源于官网[http://www.typescriptlang.org](http://www.typescriptlang.org/play/index.html)
2. 使用类型申明文件来源于这位博主的文章-thx for 初心[http://blog.csdn.net/z_sherry/article/details/64920239](http://blog.csdn.net/z_sherry/article/details/64920239)
