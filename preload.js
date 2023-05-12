const axios = require("axios");
const crypto = require("crypto");
const {apiKey} = require("./api-key");

// 密钥信息获取与帮助文档：https://www.aigcaas.cn/article/16.html

const secret_id = apiKey.secret_id; // 密钥信息
const secret_key = apiKey.secret_key; // 密钥信息
const application_name = "chatgpt_chat"; // 应用名称
const api_name = "chat_com"; // 接口名称

// 请求地址
const url = `https://api.aigcaas.cn/product/${application_name}/api/${api_name}`;

async function requestGPT(functionCode) {
  // 构建请求头
  const timestamp = Math.round(new Date() / 1000);
  const nonce = 10000 + Math.round(Math.random() * 90000);
  const hash = crypto.createHash("sha256");
  hash.update(`${timestamp}${secret_key}${nonce}`);
  const token = hash.digest("hex");
  const headers = {
    SecretID: secret_id,
    Nonce: nonce,
    Token: token,
    Timestamp: timestamp,
    "Content-Type": "application/json",
  };

  // 构建请求 body
  const data = {
    messages:
      JSON.stringify([{
        "role":"user",
        "content":"为以下代码生成中文JSDoc " + functionCode
      }])
  };

  const ret = await axios({
    method: "post",
    url: url,
    headers: headers,
    data: JSON.stringify(data),
  })

  console.log(ret)
  return ret
}

window.requestGPT = requestGPT
