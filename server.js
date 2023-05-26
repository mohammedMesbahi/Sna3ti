const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');
// const cookieParser = require('cookie-parser');
// const jwt = require('jsonwebtoken');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // server.use(cookieParser())
  /* server.use((req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, 'qsdmflkjqsdmlfkjqsdmlfkj', (err, decodedToken) => {
        if (!err)
          req.user = decodedToken.user;
      });
    }
    next();
  }) */
  server.use('/api', createProxyMiddleware({
    target: 'http://localhost:3000', // target base URL
    changeOrigin: true, // needed for virtual hosted sites    
  }));

  server.use('/uploads/profileImage', createProxyMiddleware({
    target: 'http://localhost:3000', // target base URL
    changeOrigin: true, // needed for virtual hosted sites    
  }));

  server.all('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(3001, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3001');
  });
}).catch(err => {
  console.log('Error:::::', err)
});
