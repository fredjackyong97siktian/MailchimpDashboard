SET TIME ZONE 'UTC';
CREATE EXTENSION citext;
CREATE DOMAIN cemail AS citext
  CHECK ( value ~ '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$' );
CREATE EXTENSION pgcrypto;

CREATE TABLE "user_account" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "user_account_id" char(8) NOT NULL,
  "email" cemail NOT NULL UNIQUE,
  "password" varchar(257),
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
  "email_verification_code" UUID ,
  "email_verification_code_sent_at" timestamp without time zone,
  "email_verification_code_received_at" timestamp without time zone,
  "isactive" bool  default FALSE ,
  "last_login_at" timestamp without time zone,
  "fb_id" varchar(257),
  "google_id" varchar(257),
  "accesstoken" varchar(257),
  "refreshtoken" varchar(257),
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc'),
  UNIQUE ("user_account_id","email","forget_passcode", "email_verification_code"),
      CONSTRAINT oauth_check check ((password is null and fb_id is not null and google_id is null) 
                                  or (password is null and fb_id is null and google_id is not null) 
                                  or (password is not null and fb_id is null and google_id is null )),
  CONSTRAINT chk_user_id check (user_account_id ~ '^[0-9a-zA-Z]{8}$') ,
  CONSTRAINT chk_forget_passcode check (forget_passcode ~ '^[0-9a-zA-Z!@-_#]{10}$')
);

CREATE TABLE "platform" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "platform_id" char(5) NOT NULL,
  "platform_name" varchar(257) NOT NULL,
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
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc'),
  UNIQUE (platform_id, platform_name),
  CONSTRAINT chk_plat_id check (platform_id ~ '^[0-9a-zA-Z!@-_#]{5}$') 
);

CREATE TABLE "application" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "name" varchar(257),
  "auth_method" varchar(257),
  "direct_url_component" varchar(257),
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc')
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
  "created_at" timestamp  without time zone default (now() at time zone 'utc') ,
  "updated_at" timestamp without time zone default (now() at time zone 'utc') ,
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
  "created_at" timestamp  without time zone default (now() at time zone 'utc') ,
  "updated_at" timestamp without time zone default (now() at time zone 'utc'),
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
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc'),
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
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc')
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
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc')
);


CREATE TABLE "favourite" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "user_account_id" int NOT NULL REFERENCES user_account(id),
  "dashboard_id" int NOT NULL REFERENCES dashboard(id),
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
  "subscription_id" char(8) NOT NULL UNIQUE,
  "user_account_id" int NOT NULL REFERENCES user_account(id),
  "platform_id " int NOT NULL REFERENCES platform(id),
  "plan_id" int NOT NULL REFERENCES plan(id),
  "isactive" bool,
  "bill" varchar(257),
  "issued_date" timestamp without time zone,
  "expired_at" timestamp without time zone,
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  CONSTRAINT chk_subs_id check (subscription_id ~ '^[0-9a-zA-Z]{8}$') 
);

CREATE TABLE "role_assigned" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "role_assigned_id" char(6) NOT NULL UNIQUE,
  "platform_id" int NOT NULL REFERENCES platform(id),
  "role_id" int NOT NULL REFERENCES role(id),
  "platform_setting_id" int NOT NULL REFERENCES platform_setting(id),
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc'),
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
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  CONSTRAINT chk_payment_id check (payment_id ~ '^[0-9a-zA-Z!@-_#]{6}$') 
);

/*Random UserID Auto*/
Create or replace function random_userID(length integer) returns text as
$$
declare
  chars text[] := '{0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z}';
  result text := '';
  done bool;
  i integer := 0;
begin
  done:= false;
  if length < 0 then
    raise exception 'Given length cannot be less than 0';
  end if;
  WHILE NOT done LOOP
    for i in 1..length loop
      result := result || chars[1+random()*(array_length(chars, 1)-1)];
    end loop;
  done:= NOT exists(SELECT 1 FROM user_account where user_account_id = result );
  END LOOP;
  return result;
end;
$$ language plpgsql;

/*Auto update on Updated_at*/
CREATE OR REPLACE FUNCTION update_modified_column() 
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc', now());
    RETURN NEW; 
END;
$$ language 'plpgsql';

CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON user_account FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON platform FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON application FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON authentication FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON dashboard FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON role FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON role_dashboard_authorization FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON visual_presentation FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON plan FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();
CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON role_assigned FOR EACH ROW EXECUTE PROCEDURE  update_modified_column();

ALTER TABLE user_account ALTER user_account_id SET DEFAULT random_userID(8);
ALTER TABLE platform ALTER platform_id SET DEFAULT random_userID(5);