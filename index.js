// index.js
const app = require("express")();
app.get("/", (request, response) => {
  return response.send(`
        <br />
        <br />
        <center>
            <h1>
                Hello 👋 from AWS EC2
            </h1>
        </center>
    `);
});

app.listen(3000, () => console.log("Server running!!!"));
