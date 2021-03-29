/* Replace with your SQL commands */
DELETE FROM authenticationservice where "serviceId" = 1;
DELETE from authentication where "applicationId" = 1;
DELETE FROM metrics where "serviceId" = 1;
DELETE FROM service where id = 1;
DELETE FROM application where id = 1;
