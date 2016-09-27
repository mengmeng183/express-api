var express = require('express')
var app = express()

app.post('/:name', function (req, res) {
  // var userName = req.params.name;
  // var page = '<html>'+
  //               '<body>' +
  //                 '<h1>' +
  //                 userName + '的购物车' +
  //                 '</h1>' +
  //               '</body>' +
  //             '</html>'
  res.send("a POST request received " + req.params.name)
})

// app.get('/about.html', function (req, res) {
//   var page = '<html>'+
//                 '<body>' +
//                   '<h1> about.html</h1>' +
//                 '</body>' +
//               '</html>'
//   res.send(page)
// })

app.listen(3000,function(){
  console.log('running on port 3000...plz visit http://localhost:3000');
})
