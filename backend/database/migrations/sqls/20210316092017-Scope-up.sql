CREATE TABLE "scope" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "scope_id" char(25) NOT NULL UNIQUE,
  "serviceId" int NOT NULL REFERENCES service(id),
  "name" varchar(256),
  "term" varchar(256),
  "api" text,
  "method" varchar(256),
  "isactive" bool default TRUE,
  "created_at" timestamp  without time zone default (now() at time zone 'utc')
);

ALTER TABLE scope  ALTER scope_id SET DEFAULT random_userID(25);

INSERT INTO scope ("serviceId",name,term) VALUES 
(1,'Employee','employee.ALL'),
(1,'Forms','forms.READ'),
(1,'Dashboard','dashboard.ALL'),
(1,'Automation','automation.ALL'),
(1,'TimeTracker','timetracker.ALL'),
(1,'Attendance','attendance.ALL'),
(1,'Leave','leave.READ');