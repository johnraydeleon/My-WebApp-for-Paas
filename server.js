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
                    background: linear-gradient(to top
                      , #e0ebeb, #a3c2c2);
                    text-align: center;
                    padding-top: 50px; /* space from top */
                }
                h1 {
                    font-size: 30px;
                    color: #283e3e;
                    margin: 10px 0;
                }
                p {
                    font-size: 24px;
                    color: #283e3e;
                    margin: 5px 0;
                }
               .verseTitle {
                margin-top: 30px;
              }
                .verse {
                    font-size: 20px;
                    color: #283e3e;
                    font-style: italic;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div>
                <h1>John Ray L. De Leon</h1>
                <p>BSIT BA - 4101</p>
                <p class= "verseTitle">- Matthew 6:33</p>
                <p class="verse">"But seek first the kingdom of God and His righteousness, and all these things shall be added to you."</p>
            </div>
        </body>
        </html>
 `);
    res.end();
});
server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});