# MailchimpDashboard
This is the platform where user able to retrieve the information from Mailchimp and display in the form of chart.

This is my first ReactJs project.
Is you have any doubt or suggestion, feel free to contact me! We can share some ideas and discuss on future improvement.

# Aim
The purpose of building this dashboard is to let solve the problem of visualizing the Mailchimp time series chart. In Mailchimp insight, we are unable to see the trend/pattern of the subscribe/unsubscribed contact or how the campaign performance in recent 7 days.

Through this dashboard, the user able to see gain some insight from the time series chart.

There are two main folders, which are frontend and backend.

# Folder
## Frontend
Programming Language : ReactJs with Typescript

Decoration : Material UI

Chart : VictoryJs

DnD : react sortable hoc


### Setup
1. Go into the frontend folder

``` 
cd frontend
```

2. Install the packages

``` 
npm install
```

3. Putting the detail in .env

```
REACT_APP_API_BACKEND=
REACT_APP_API_CLIENT=
REACT_APP_FACEBOOK_API=
```

4. Run the node server

``` 
npm run start
```

## Backend
Database: SQL(Postgres) and NOSQL(Firebase)

Server: ExpressJs

Migration: db-migrate

ORM: TypeORM

### Setup
1. Go into the backend folder

``` 
cd backend/functions
```

2. Install the packages

``` 
npm install
```

3. Put Environment Detail in .env

```
POSTGRESQL_HOST=
POSTGREQSL_PORT=
POSTGRESQL_USER=
POSTGRESQL_PASSWORD=
POSTGRESQL_DATABASE=
```

4. Run the Migration

``` 
cd database
db-migrate up
```

5. Run the server
``` 
cd .. 
npm run serve 
```

