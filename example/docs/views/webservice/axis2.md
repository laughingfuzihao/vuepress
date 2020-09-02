---
title: WebServiceaxis2
date: 2020-08-27 08:00:00
tags:
 - WebService
categories:
 - WebService
---
## 一、WebService简介

WebService是一种跨编程语言、跨操作系统平台的远程调用技术。

从表面上看，WebService是指一个应用程序向外界暴露了一个能通过Web调用的API接口，我们把调用这个WebService的应用程序称作客户端，把提供这个WebService的应用程序称作服务端。

### 三要素

### WSDL Web services 描述语言

**描述传递信息的格式**

WSDL是Web services 描述语言，定义了接口方法。

WSDL(Web Services Description Language)是一个基于XML的语言，用于描述Web Service及其函数、参数和返回值。它是WebService客户端和服务器端都能理解的标准格式。

###  SOAP简单对象访问协议

**描述传递信息的格式**

SOAP 是一种简单的基于 XML 的协议，它使应用程序通过 HTTP 来交换信息。

一条 SOAP 消息就是一个普通的 XML 文档，包含下列元素：

- 必需的 Envelope 元素，可把此 XML 文档标识为一条 SOAP 消息
- 可选的 Header 元素，包含头部信息
- 必需的 Body 元素，包含所有的调用和响应信息
- 可选的 Fault 元素，提供有关在处理此消息所发生错误的信息

```
POST /InStock HTTP/1.1
Host: www.example.org
Content-Type: application/soap+xml; charset=utf-8
Content-Length: nnn

<?xml version="1.0"?>
<soap:Envelope
xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">

<soap:Body xmlns:m="http://www.example.org/stock">
  <m:GetStockPrice>
    <m:StockName>IBM</m:StockName>
  </m:GetStockPrice>
</soap:Body>

</soap:Envelope>
```

### UDDI

UDDI 是一种目录服务，通过它，企业可注册并搜索 Web services。

 **uddi用来管理，分发，查询webService**



## 二、AXIS2

Apache Axis2 是Axis的后续版本，是新一代的SOAP引擎。





































