
//https://blog.csdn.net/weixin_42204641/article/details/82736746

// Content-Type描述的只是发送端;
// 发送端既可以是服务器也可以是客户端;
// Content-Type代表发送端发送的实体数据的数据类型。
// 比如：Content-Type：text/html;
// 代表发送端发送的数据格式是html


//post请求肯定要发送数据包;
// 因此对数据包的Type有专门的限定:
// Content-Type只能是
// application/x-www-form-urlencoded,
// application/json
// multipart/form-data
// 或 text/plain中的一种。
// 其他的均不常见。