const admin = require('firebase-admin');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

admin.initializeApp({
    credential: admin.credential.cert(require('./da04-4e60b-firebase-adminsdk-mo5tt-1c531109e4.json')),
    storageBucket: 'https://da04-4e60b-default-rtdb.firebaseio.com',
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

app.use(bodyParser.json());

// Endpoint para agregar datos a una colección
app.post('/addData', async (req, res) => {
    const { collection, data } = req.body;
    const docRef = await db.collection(collection).add(data);
    res.send(`Documento añadido con ID: ${docRef.id}`);
});

// Endpoint para subir archivos a Firebase Storage
app.post('/upload', async (req, res) => {
    const filePath = req.body.filePath;
    const fileName = req.body.fileName;

    await bucket.upload(filePath, {
        destination: fileName,
    });

    res.send(`Archivo subido: ${fileName}`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
