# Mongoose 

Você pode usar o Mongoose para conectar e configurar o MongoDB como mencionado anteriormente.

```javascript
import mongoose from 'mongoose'
import Grid from 'gridfs-stream'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/seu-banco-de-dados', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    const conn = mongoose.connection;
    Grid.mongo = mongoose.mongo;
    const gfs = Grid(conn.db);
    } catch {
        console.log(`Erro na conexão com o MongoDB: ${err}`)      
    } 
} 

connectDB(); 
``` 

Rota de upload

```javascript
import express from 'express'
import multer from 'multer'
import Grid from 'grid-stream'
import mongoose from 'mongoose'
import fs from 'fs'

const router = express.Router()
const upload = mulder({ dest: 'uploads/'})

const conn - mongoose.connection;
const gfs = Grid(conn.db);

router.post('/upload', upload.single('image'), async (req, res) => {
    const { file } = req;
    const writestream = gfs.createWriteStream({
        filename : file.originalname,
    });

    const readstream = fs.createReadStream(file.path);

    readstream.pip(writestream);

    writestream.on('close', (file) => {
        fs.unlink(file.path, () => {
            res.json( { _id} : file._id ); 
        })
    }) 
})

export default router; 
```
