ALTER TABLE authentication ADD scope JSON;
ALTER TABLE service DROP COLUMN scope; 
DROP TABLE authentication_permission;