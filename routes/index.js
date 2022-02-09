var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

router.get('/', function(request, response) { 
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `
      <h2>${title}</h2>${description}
      <img src="/images/lavender.jpg" style="width:800px; display:block; margin-top:2px;">
      `,
      `<a href="/topic/create">create</a>`
    ); 
    response.send(html);
  });

  module.exports = router;
