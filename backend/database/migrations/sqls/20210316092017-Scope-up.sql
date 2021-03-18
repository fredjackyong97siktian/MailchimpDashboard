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
(1,'Employee','ZOHOPEOPLE.employee.ALL'),
(1,'Forms','ZOHOPEOPLE.forms.READ'),
(1,'Dashboard','ZOHOPEOPLE.dashboard.ALL'),
(1,'Automation','ZOHOPEOPLE.automation.ALL'),
(1,'TimeTracker','ZOHOPEOPLE.timetracker.ALL'),
(1,'Attendance','ZOHOPEOPLE.attendance.ALL'),
(1,'Leave','ZOHOPEOPLE.leave.READ');