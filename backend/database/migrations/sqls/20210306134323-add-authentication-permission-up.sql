CREATE TABLE "authentication_permission" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "ap_id" char (36) NOT NULL UNIQUE,
  "authenticationId" int NOT NULL REFERENCES authentication(id),
  "serviceId" int NOT NULL REFERENCES service(id),
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc')
);

ALTER TABLE authentication DROP COLUMN scope;
ALTER TABLE service ADD scope JSON;