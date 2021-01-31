//dotenv
require('dotenv').config();

//postgresql
const pgp = require('pg-promise')({});

const cn = {
    "host" : process.env.POSTGRESQL_HOST,
    "port" : process.env.POSTGRESQL_PORT,
    "database" : process.env.POSTGRESQL_DATABASE,
    "user" :process.env.POSTGRESQL_USER,
    "password" : process.env.POSTGRESQL_PASSWORD
}

var pgdb = pgp(cn)

pgdb.connect()
    .then((obj:any) => {
        console.log('Postgresql Connected');
    })
    .catch((error :any )=> {
        console.log('ERROR:', error.message || error);
});

//firebase
const firebase = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

var admin = firebase.initializeApp({
    credential: firebase.credential.applicationDefault(),
    databaseURL: 'https://bsupkit-45126.firebaseio.com'
});

app.use(cors({ origin: true }));

app.get('/hello-world', (req:any, res:any) => {
  return res.status(200).send('Hello World!');
});
const db = admin.firestore();

app.post('/api/pgcreate', (req:any, res:any) => {
    (async () => {
        await pgdb.none('INSERT INTO user_account(username,password,email) VALUES(${username},${password},${email})', {
            username: 'testing',
            password: '123',
            email: 'haha'
        });
    })
  });

// create
app.post('/api/create', (req:any, res:any) => {
    (async () => {
        try {
            console.log('testing');
          await db.collection('items').doc('/' + req.body.id + '/')
              .create({item: req.body.item});
          return res.status(200).send();
        } catch (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      })();
  });
exports.app = functions.https.onRequest(app);