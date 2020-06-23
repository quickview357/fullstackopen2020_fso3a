# fullstackopen2020_fso3a: a2_express
* Chúng ta có thể sử dụng [http](https://nodejs.org/docs/latest-v8.x/api/http.html) của Nodejs để build webserver nhưng chúng hơi cồng kềnh, đặc biệt là khi dự án lớn dần lên, do đó chúng ta cần thư viện để làm việc này đó chính là Express. Express cho phép viết code server side với Nodejs bằng cách tạo ra các interface làm việc rất thuận tiện.
```
  npm install express --save
```
```js

  // ...
  "dependencies": {
    "express": "^4.17.1"
  }
}
```
* Sau khi cài đặt xong Express thì chúng tạo ra nhiều module dependenciesencies trong node_modules, những dependencies này gọi là [transitive dependencies](https://lexi-lambda.github.io/blog/2016/08/24/understanding-the-npm-dependency-model/).
* The versioning model used in npm is called [semantic versioning](https://docs.npmjs.com/about-semantic-versioning)
* Dấu ^ có nghĩa là khi ta dùng lệnh ```npm update``` thì phiên bản tối thiểu nhất là 4.17.1, nhưng cũng có thể nó được update lên phiên bản lớn hơn, ví dụ như 4.18.1 hoặc 4.17.2 nhưng không thể là phiên bản 5.x.x
* Khi mới tạo project thì chúng ta có thể chạy lệnh ```npm install``` để lấy thư viện về.
