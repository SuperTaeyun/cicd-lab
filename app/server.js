import http from 'http';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/healthz') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('ok');
        return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<h1>It works! 🚀</h1><p>Deployed on EKS via GitHub Actions</p>`);
});

server.listen(port, () => {
    console.log(`server listening on ${port}`);
});
