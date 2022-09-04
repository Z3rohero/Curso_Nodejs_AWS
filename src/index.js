import express from 'express';
import fileUpload from 'express-fileupload';

const app = express();
app.use(fileUpload());

app.get('/', (req, res) => {
  res.json({ message: "bienvendo" })
});

app.listen(3000, () => {
  console.log('server started');
});
