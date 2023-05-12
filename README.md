# UTools 插件：ChatGPT API JSDoc Generator

[![GitHub license](https://img.shields.io/github/license/ycp424c/ai_utools_jsdoc.svg)](https://github.com/ycp424c/ai_utools_jsdoc/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/ycp424c/ai_utools_jsdoc.svg)](https://github.com/ycp424c/ai_utools_jsdoc/releases/)
[![GitHub issues](https://img.shields.io/github/issues/ycp424c/ai_utools_jsdoc.svg)](https://github.com/ycp424c/ai_utools_jsdoc/issues)
[![ChatGPT API version](https://img.shields.io/badge/ChatGPT%20API-v3.5-blue)](https://openai.com/api/chat/)

这是一款用于生成 JavaScript 文档注释（JSDoc）的 UTools 插件。该插件使用 ChatGPT API（版本 v3.5）来自动生成 JSDoc。

## 功能特点

- 支持输入要生成注释的 JavaScript 代码
- 支持选择要生成注释的函数、变量等代码片段
- 支持将生成的注释复制到剪贴板
- 国内代理服务，无须梯子，api价格实惠

## 安装方法

1. 在[AIGCaaS](https://www.aigcaas.cn/)新建账号并获取apiKey和apiId
1. 项目根目录新建api-key.js
```javascript
module.exports = {
  apiKey: {
    secret_id: "your_api_id", // 密钥信息
    secret_key: "your_api_key", // 密钥信息
  },
};
```
1. 打开 UTools
1. [快速上手 | uTools]https://www.u.tools/docs/developer/welcome.html#%E5%BC%80%E5%8F%91%E8%80%85%E4%B8%AD%E5%BF%83

## 使用方法

1. 在任意编辑器或 IDE 中打开你的 JavaScript 代码文件
2. 选中你想要生成注释的代码片段，注意需要完整选择整个函数
3. 长按右键呼出超级面板，点击生成JSDoc

## 注意事项

- 该插件需要连接互联网才能使用 ChatGPT API，因此需要确保你的设备已连接互联网
- 该插件仅支持生成标准 JSDoc 注释，不支持其他类型的注释
- 该插件使用的 ChatGPT API 是一个商业服务，需要在 AIGCaaS 平台上注册并获取 API 密钥才能使用

## 开发者信息

- 作者：ycp424c
- 版本号：1.0.0
- GitHub 仓库地址：https://github.com/ycp424c/ai_utools_jsdoc

## 许可证

该插件基于 MIT 许可证开源。详细信息请参见 LICENSE 文件。