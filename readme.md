# context.vscode
一个 js 库，用于 vscode 插件开发中，简洁地获取 `vscode.ExtensionContext` 对象  

`vscode.ExtensionContext` 对象（以下简称 `context`），作为 `activate` 函数的第一个参数，传递给开发者，以供使用  
但我们的代码分布在很多文件中  
在某个犄角旮旯的文件的某个函数里，获取并使用 `context`，不是一件困难的事，但是一件麻烦事  
做这个库，就是想尽量消除这个麻烦  

## 安装
``` bash
npm install @ppzp/context
```

## 使用
### 先在 activate 函数里设置
``` js
const CTX = require('@ppzp/context')

// ...

exports.activate(context) {
  // ...
  CTX.set(context)
  // ...
}

// ...
```

### 在犄角旮旯里获取
``` js
const CTX = require('@ppzp/context')

// ...

function 犄角旮旯() {
  // ...
  const context = CTX.get()
  // ...
}

// ...
```
