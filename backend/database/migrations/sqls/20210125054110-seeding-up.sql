SET TIME ZONE 'UTC';

CREATE TABLE "user_account" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "user_account_id" char(8) NOT NULL,
  "username" varchar(257),
  "password" varchar(257),
  "email" varchar(50),
  "profile_img" varchar(257),
  "firstname" varchar(257),
  "lastname" varchar(257),
  "address1" varchar(257),
  "address2" varchar(257),
  "city" varchar(257),
  "state" varchar(257),
  "postal_code" varchar(257),
  "country" varchar(257),
  "mobile"varchar(257),
  "forget_passcode" char(10) ,
  "forget_passcode_receive_at" timestamp without time zone,
  "isactive" bool  default TRUE ,
  "last_login_at" timestamp without time zone,
  "created_at" timestamp without time zone,
  "updated_at" timestamp without time zone,
  UNIQUE ("user_account_id","email","forget_passcode"),
  CONSTRAINT chk_user_id check (user_account_id ~ '^[0-9a-zA-Z]{8}$') ,
  CONSTRAINT chk_forget_passcode check (forget_passcode ~ '^[0-9a-zA-Z!@-_#]{10}$')
);

CREATE TABLE "platform" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "platform_id" char(5) NOT NULL UNIQUE,
  "user_account_id" int NOT NULL REFERENCES user_account(id),
  "company_name" varchar(257),
  "company_website" varchar(257),
  "company_industry" varchar(257),
  "address1" text,
  "address2" text,
  "city" varchar(257),
  "state" varchar(257),
  "postal_code" char(8),
  "country" varchar(257),
  "phone_code" char(4) ,
  "mobile" varchar(257),
  "created_at" timestamp without time zone,
  "updated_at" timestamp without time zone,
  CONSTRAINT chk_plat_id check (platform_id ~ '^[0-9a-zA-Z!@-_#]{5}$') 
);

CREATE TABLE "application" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "name" varchar(257),
  "auth_method" varchar(257),
  "direct_url_component" varchar(257),
  "created_at" timestamp without time zone,
  "updated_at" timestamp without time zone
);

CREATE TABLE "authentication" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "authentication_id" char (6) NOT NULL UNIQUE,
  "user_account_id" int NOT NULL REFERENCES user_account(id),
  "application_id" int NOT NULL REFERENCES application(id),
  "platform_id" int NOT NULL REFERENCES platform(id),
  "access_token" varchar (275),
  "token_type" varchar (275),
  "expired_in" int,
  "refresh_token" varchar (275),
  "scope" json,
  "created_at" timestamp without time zone ,
  "updated_at" timestamp without time zone ,
  CONSTRAINT chk_auth_id check (authentication_id ~ '^[0-9a-zA-Z!@-_#]{6}$')
);

CREATE TABLE "platform_setting" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "platform_setting_name" varchar(257)
);

CREATE TABLE "platform_setting_authorization" (
  "id" SERIAL NOT NULL PRIMARY KEY ,
  "platform_setting_id" int NOT NULL REFERENCES platform_setting(id),
  "setting_description" text,
  "permission" smallint
);

CREATE TABLE "category" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "name" varchar(257),
  "isactive" bool  default TRUE
);


CREATE TABLE "subcategory" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "category_id" int REFERENCES category(id),
  "name" varchar(257),
  "isactive" bool  default TRUE
);

CREATE TABLE "dashboard" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "dashboard_id" char(6) NOT NULL UNIQUE,
  "platform_id" int NOT NULL REFERENCES platform (id),
  "subcategory_id" int NOT NULL REFERENCES subcategory (id),
  "dashboard_name" varchar(257),
  "isactive" bool  default TRUE,
  "iscustom" bool  default FALSE,
  "created_at" timestamp without time zone ,
  "updated_at" timestamp without time zone,
  CONSTRAINT chk_dash_id check (dashboard_id ~ '^[0-9a-zA-Z!@-_#]{6}$') 
);



CREATE TABLE "chart" (
  "id" SERIAL NOT NULL PRIMARY KEY ,
  "name" varchar(257)
);

CREATE TABLE "subchart" (
  "id" SERIAL NOT NULL PRIMARY KEY ,
  "chart_id" int REFERENCES chart(id),
  "subchart_name" varchar(257),
  "reference_component" varchar(257)
);

CREATE TABLE "role" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "role_id" char(6) NOT NULL UNIQUE,
  "platform_id" int NOT NULL REFERENCES platform(id),
  "user_account_id" int NOT NULL REFERENCES user_account(id),
  "role_name" varchar(257),
  "created_at" timestamp without time zone,
  "updated_at" timestamp without time zone,
  CONSTRAINT chk_role_id check (role_id ~ '^[0-9a-zA-Z!@-_#]{6}$') 
);

CREATE TABLE "service" (
  "id" SERIAL NOT NULL PRIMARY KEY ,
  "category_id" int NOT NULL REFERENCES category(id),
  "application_id" int NOT NULL REFERENCES application(id) 
);

CREATE TABLE "role_dashboard_authorization" (
  "id" SERIAL NOT NULL PRIMARY KEY ,
  "dashboard_id" int NOT NULL REFERENCES dashboard(id),
  "role_id" int NOT NULL REFERENCES role(id),
  "permission" smallint,
  "created_at" timestamp without time zone,
  "updated_at" timestamp without time zone
);

CREATE TABLE "payment_method" (
  "id" SERIAL NOT NULL PRIMARY KEY 
);

CREATE TABLE "visualization" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "subcategory_id" int NOT NULL REFERENCES subcategory(id),
  "subchart_id" int NOT NULL REFERENCES subchart(id)
);

CREATE TABLE "visual_presentation" (
  "id" SERIAL NOT NULL PRIMARY KEY ,
  "visualization_id" int NOT NULL REFERENCES visualization(id),
  "business_information_id" char(7) NOT NULL UNIQUE,
  "dashboard_id" int NOT NULL REFERENCES dashboard(id),
  "arrangment" smallint,
  "created_at" timestamp without time zone,
  "updated_at" timestamp without time zone
);


CREATE TABLE "favourite" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "user_account_id" int NOT NULL REFERENCES user_account(id),
  "dashboard_id" int NOT NULL REFERENCES dashboard(id),
  "created_at" timestamp without time zone
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
  "created_at" timestamp without time zone,
  "updated_at" timestamp without time zone
);

CREATE TABLE "subscription" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "subscription_id" char(8) NOT NULL UNIQUE,
  "user_account_id" int NOT NULL REFERENCES user_account(id),
  "platform_id " int NOT NULL REFERENCES platform(id),
  "plan_id" int NOT NULL REFERENCES plan(id),
  "isactive" bool,
  "bill" varchar(257),
  "issued_date" timestamp without time zone,
  "expired_at" timestamp without time zone,
  "created_at" timestamp without time zone,
  CONSTRAINT chk_subs_id check (subscription_id ~ '^[0-9a-zA-Z]{8}$') 
);

CREATE TABLE "role_assigned" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "role_assigned_id" char(6) NOT NULL UNIQUE,
  "platform_id" int NOT NULL REFERENCES platform(id),
  "role_id" int NOT NULL REFERENCES role(id),
  "platform_setting_id" int NOT NULL REFERENCES platform_setting(id),
  "created_at" timestamp without time zone,
  "updated_at" timestamp without time zone,
  CONSTRAINT chk_ra_id check (role_assigned_id ~ '^[0-9a-zA-Z!@-_#]{6}$') 
);

CREATE TABLE "payment" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "payment_id" char(6) NOT NULL UNIQUE,
  "payment_method_id" int NOT NULL REFERENCES payment_method(id),
  "user_account_id" int NOT NULL REFERENCES user_account(id),
  "subscription_id" int NOT NULL REFERENCES subscription(id),
  "payment_date" timestamp without time zone,
  "amount" money,
  "currency" char(3),
  "status" varchar,
  "created_at" timestamp without time zone,
  CONSTRAINT chk_payment_id check (payment_id ~ '^[0-9a-zA-Z!@-_#]{6}$') 
);
