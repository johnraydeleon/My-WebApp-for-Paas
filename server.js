const http = require("http");
const PORT = process.env.PORT || 3000;
const server = http.createServer((req ,res) => {
    res.write("Hello Cloud!");
    res.writeline("This is first website that have server")
    res.end();
});
server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});