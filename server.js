const http = require("http");
const PORT = process.env.PORT || 3000;
const server = http.createServer((req ,res) => {
    res.writeHead(200, {"content-type":"text/html"});
    res.write(`
        <html>
        <head>
            <style>
                html, body {
                    height: 100%;
                    margin: 0;
                    font-family: 'Arial', sans-serif;
                }
                body {
                    display: flex;
                    justify-content: center; /* horizontal center */
                    align-items: flex-start; /* top of page */
                    background-color: #f0f0f0;
                    text-align: center;
                    padding-top: 50px; /* space from top */
                }
                h1 {
                    font-size: 50px;
                    color: #333;
                    margin: 10px 0;
                }
                p {
                    font-size: 24px;
                    color: #555;
                    margin: 5px 0;
                }
                .verse {
                    font-size: 20px;
                    color: #007700;
                    font-style: italic;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div>
                <h1>John Ray L. De Leon</h1>
                <p>BSIT BA - 4101</p>
                <p>- Matthew 6:33</p>
                <p class="verse">"But seek first the kingdom of God and His righteousness, and all these things shall be added to you."</p>
            </div>
        </body>
        </html>
 `);
    res.write("John Ray L. De Leon\n");
    res.write("BSIT BA - 4101\n");
    res.write("Matthew 6:33")
    res.end();
});
server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});