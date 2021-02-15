import AllRoute from './route';
import passport from "passport";
import 'reflect-metadata';
import {createConnection} from'typeorm';

//postgresq
const pgp = require('pg-promise')({});

//firebase
const firebase = require('firebase-admin');
const functions = require('firebase-functions');

//Express
const express = require('express');
const cors = require('cors');
const app = express();

//TypeORM
createConnection();

//passport
app.use(passport.initialize());

//security measure
var helmet = require('helmet')
app.use(cors({ origin: true }));
app.disable('x-powered-by')
app.use(helmet())


//configuration
var config = require('./../../config');

//POSTGRE CONFIGURATION
const cn = {
    "host" : config.POSTGRESQL_HOST,
    "port" : config.POSTGRESQL_PORT,
    "database" : config.POSTGRESQL_DATABASE,
    "user" : config.POSTGRESQL_USER,
    "password" : config.POSTGRESQL_PASSWORD
}

export const pgdb = pgp(cn)

pgdb.connect()
    .then((obj:any) => {
        console.log('Postgresql Connected');
    })
    .catch((error :any )=> {
        console.log('ERROR:', error.message || error);
});

const api = '/api'
app.use(api,AllRoute);


//firebase
var admin = firebase.initializeApp({
    credential: firebase.credential.applicationDefault(),
    databaseURL: 'https://bsupkit-45126.firebaseio.com'
});

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