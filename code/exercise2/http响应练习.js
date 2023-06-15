// 向网页返回一个四行三列的表格，实现隔行换色，点击高亮
const http = require('http');

const server = http.createServer((req, res) => {
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      td {
        padding: 20px 24px;
      }
      table, tr {
        border-collapse: collapse;
      }
      tr:nth-child(odd) {
        background: #fec;
      }
      tr:nth-child(even) {
        background: #bad;
      }
    </style> 
  </head>
  <body>
    <table border="1">
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <script>
      const tdDom = document.getElementsByTagName('td');
      Array.from(tdDom).forEach(item => {
        item.onclick = function() {
          this.style.background = '#ccc';
        }
      })
    </script>
  </body>
  </html>`);
});

server.listen(8088, () => {
  console.log('server running...');
})