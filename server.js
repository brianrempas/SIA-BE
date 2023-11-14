const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const app = require('./src/app');

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
