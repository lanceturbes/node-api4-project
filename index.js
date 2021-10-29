// Use environment varibles from ".env"
// require("dotenv").config();

const app = require("./api/server");
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
    Link to site: http://localhost:${PORT}
    Listening on port ${PORT}...
  `);
});
