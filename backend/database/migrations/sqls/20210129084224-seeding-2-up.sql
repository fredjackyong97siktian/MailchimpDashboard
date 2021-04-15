CREATE TABLE "application" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "application_id" char (20) NOT NULL UNIQUE,
  "name" varchar(257),
  "auth_method" varchar(257),
  "direct_url_component" text,
  "imglocation" varchar(257),
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc'),
  CONSTRAINT chk_application_id check (application_id ~ '^[0-9a-zA-Z]{20}$') 
);

CREATE TABLE "authentication" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "authentication_id" char (20) NOT NULL UNIQUE,
  "userAccountId" int NOT NULL REFERENCES user_account(id),
  "applicationId" int NOT NULL REFERENCES application(id),
  "platformId" int NOT NULL REFERENCES platform(id),
  "created_at" timestamp  without time zone default (now() at time zone 'utc') ,
  "updated_at" timestamp without time zone default (now() at time zone 'utc') ,
  CONSTRAINT chk_auth_id check (authentication_id ~ '^[0-9a-zA-Z]{20}$')
);

CREATE TABLE "platform_setting" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "platform_setting_name" varchar(257)
);

CREATE TABLE "platform_setting_authorization" (
  "id" SERIAL NOT NULL PRIMARY KEY ,
  "platform_settingId" int NOT NULL REFERENCES platform_setting(id),
  "setting_description" text,
  "permission" smallint
);

CREATE TABLE "category" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "name" varchar(257),
  "isactive" bool  default TRUE
);

CREATE TABLE "chart" (
  "id" SERIAL NOT NULL PRIMARY KEY ,
  "name" varchar(257)
);

CREATE TABLE "subchart" (
  "id" SERIAL NOT NULL PRIMARY KEY ,
  "chartId" int REFERENCES chart(id),
  "subchart_name" varchar(257),
  "reference_component" varchar(257)
);

CREATE TABLE "role" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "role_id" char(20) NOT NULL UNIQUE,
  "platformId" int NOT NULL REFERENCES platform(id),
  "userAccountId" int NOT NULL REFERENCES user_account(id),
  "role_name" varchar(257),
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc'),
  CONSTRAINT chk_role_id check (role_id ~ '^[0-9a-zA-Z!@-_#]{20}$') 
);

CREATE TABLE "service" (
  "id" SERIAL NOT NULL PRIMARY KEY ,
  "service_id" char (20) NOT NULL UNIQUE,
  "service_name" varchar(256),
  "description" varchar(257),
  "categoryId" int NOT NULL REFERENCES category(id),
  "applicationId" int NOT NULL REFERENCES application(id),
  "isBeta" bool DEFAULT true,
  CONSTRAINT chk_service_id check (service_id ~ '^[0-9a-zA-Z]{20}$'),
   UNIQUE ("categoryId", "applicationId" )
   
);

CREATE TABLE "dashboard" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "dashboard_id" char(20) NOT NULL UNIQUE,
  "platformId" int NOT NULL REFERENCES platform (id),
  "serviceId" int REFERENCES service(id),
  "position" int[] DEFAULT ARRAY[]::integer[],
  "dashboard_name" varchar(257),
  "isactive" bool default TRUE,
  "created_at" timestamp  without time zone default (now() at time zone 'utc') ,
  "updated_at" timestamp without time zone default (now() at time zone 'utc'),
  CONSTRAINT chk_dash_id check (dashboard_id ~ '^[0-9a-zA-Z!@-_#]{20}$'),
  UNIQUE("platformId","serviceId")
);

CREATE TABLE "role_dashboard_authorization" (
  "id" SERIAL NOT NULL PRIMARY KEY ,
  "dashboardId" int NOT NULL REFERENCES dashboard(id),
  "roleId" int NOT NULL REFERENCES role(id),
  "permission" smallint,
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc')
);

CREATE TABLE "payment_method" (
  "id" SERIAL NOT NULL PRIMARY KEY 
);

CREATE TABLE "favourite" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "userAccountId" int NOT NULL REFERENCES user_account(id),
  "dashboardId" int NOT NULL REFERENCES dashboard(id),
  "created_at" timestamp  without time zone default (now() at time zone 'utc')
);


CREATE TABLE "plan" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "plan_name" varchar(257),
  "plan_description" text,
  "isactive" bool,
  "isyear" bool,
  "ismonth" bool,
  "price" money,
  "currency" char(3),
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc')
);

CREATE TABLE "subscription" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "subscription_id" char(20) NOT NULL UNIQUE,
  "userAccountId" int NOT NULL REFERENCES user_account(id),
  "platformId " int NOT NULL REFERENCES platform(id),
  "planId" int NOT NULL REFERENCES plan(id),
  "isactive" bool,
  "bill" varchar(257),
  "issued_date" timestamp without time zone,
  "expired_at" timestamp without time zone,
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  CONSTRAINT chk_subs_id check (subscription_id ~ '^[0-9a-zA-Z]{20}$') 
);

CREATE TABLE "role_assigned" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "role_assigned_id" char(20) NOT NULL UNIQUE,
  "platformId" int NOT NULL REFERENCES platform(id),
  "roleId" int NOT NULL REFERENCES role(id),
  "platform_settingId" int NOT NULL REFERENCES platform_setting(id),
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc'),
  CONSTRAINT chk_ra_id check (role_assigned_id ~ '^[0-9a-zA-Z!@-_#]{20}$') 
);

CREATE TABLE "payment" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "payment_id" char(20) NOT NULL UNIQUE,
  "payment_methodId" int NOT NULL REFERENCES payment_method(id),
  "userAccountId" int NOT NULL REFERENCES user_account(id),
  "subscriptionId" int NOT NULL REFERENCES subscription(id),
  "payment_date" timestamp without time zone,
  "amount" money,
  "currency" char(3),
  "status" varchar,
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  CONSTRAINT chk_payment_id check (payment_id ~ '^[0-9a-zA-Z!@-_#]{20}$') 
);

CREATE TABLE "metricsgroup" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "name" varchar(256)
);

CREATE TABLE "metrics" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "metrics_id" char(20) NOT NULL UNIQUE,
  "serviceId" int NOT NULL REFERENCES service(id),
  "metricsgroupId" int NOT NULL REFERENCES metricsgroup(id),
  "name" varchar(256),
  "displayName" varchar(256),
  "detail" text,
  "api" varchar (256),
  "selection" bool DEFAULT FALSE,
  "isactive" bool default TRUE,
  "created_at" timestamp  without time zone default (now() at time zone 'utc')  
);

CREATE TABLE "authenticationservice" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "ap_id" char (20) NOT NULL UNIQUE,
  "appname" varchar(256),
  "authenticationId" int NOT NULL REFERENCES authentication(id),
  "serviceId" int NOT NULL REFERENCES service(id),
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc')
);

CREATE TABLE "authenticationmetrics" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "metrics_id" char (20) NOT NULL UNIQUE,
  "metricsId" int NOT NULL REFERENCES metrics(id),
  "authenticationserviceId" int NOT NULL REFERENCES authenticationservice(id),
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc')
);

CREATE TABLE "visualization" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "metricsId" int NOT NULL REFERENCES metrics(id),
  "subchartId" int NOT NULL REFERENCES subchart(id),
  "isDefault" bool DEFAULT FALSE,
  "api" varchar(256)
);

CREATE TABLE "visualizationpresentation" (
  "id" SERIAL NOT NULL PRIMARY KEY ,
  "visualizationId" int NOT NULL REFERENCES visualization(id),
  "authenticationmetricsId" int NOT NULL REFERENCES authenticationmetrics(id) ON DELETE CASCADE,
  "selection" varchar(256),
  "dashboardId" int NOT NULL REFERENCES dashboard(id),
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc')
);

CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON application FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON authentication FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON dashboard FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON role FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON role_dashboard_authorization FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON visualizationpresentation FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON plan FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON role_assigned FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON oauth_login FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON authenticationservice FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON authenticationmetrics FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();

ALTER TABLE dashboard ALTER dashboard_id SET DEFAULT random_userID(20);
ALTER TABLE role  ALTER role_id SET DEFAULT random_userID(20);
ALTER TABLE role_assigned  ALTER role_assigned_id SET DEFAULT random_userID(20);
ALTER TABLE payment ALTER payment_id SET DEFAULT random_userID(20);
ALTER TABLE subscription  ALTER subscription_id SET DEFAULT random_userID(20);
ALTER TABLE service ALTER service_id SET DEFAULT random_userID(20);
ALTER TABLE application ALTER application_id SET DEFAULT random_userID(20);
ALTER TABLE metrics ALTER metrics_id SET DEFAULT random_userID(20);
ALTER TABLE authenticationmetrics ALTER metrics_id SET DEFAULT random_userID(20);