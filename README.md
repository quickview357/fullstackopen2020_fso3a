# fullstackopen2020_fso3a: a1_webserver
* Tạo web server đơn giản với node
```js
const http = require('http')
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
})
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
```
- Nodejs sử dụng [CommonJS](https://requirejs.org/docs/commonjs.html) modules để load đối tượng http
- Khi nào Node hỗ trợ ES6 thì chúng ta có thể dùng
```js
import http from 'http'
```
- Lý do cho việc sử dụng [CommonJS](https://requirejs.org/docs/commonjs.html) là vì Node ecosystem có những modules phục vụ cho việc này trước khi Javascript hỗ trợ chúng.
- Phần Header có các loại [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) là: 'text/plain', 'text/html', 'application/json',