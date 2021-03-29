SET TIME ZONE 'UTC';
CREATE EXTENSION citext;
CREATE DOMAIN cemail AS citext
  CHECK ( value ~ '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$' );
CREATE EXTENSION pgcrypto;

CREATE TABLE "oauth" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "oauth_name" varchar(257) NOT NULL UNIQUE,
  "created_at" timestamp  without time zone default (now() at time zone 'utc')
);

CREATE TABLE "user_account" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "user_account_id" char(25) NOT NULL,
  "email" cemail NOT NULL UNIQUE,
  "password" varchar(257) UNIQUE,
  "password_updated_at" timestamp  without time zone default (now() at time zone 'utc'),
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
  "forget_passcode" UUID ,
  "forget_passcode_receive_at" timestamp without time zone,
  "email_verification_code" UUID ,
  "email_verification_code_sent_at" timestamp without time zone,
  "email_verification_code_received_at" timestamp without time zone,
  "isactive" bool  default FALSE ,
  "last_login_at" timestamp without time zone,
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc'),
  UNIQUE ("user_account_id","email","forget_passcode", "email_verification_code"),
  /*CONSTRAINT oauth_check check ((password is null and oauth_login_id is not null and oauth_profile_id is not null) 
                                  or (password is not null and oauth_login_id is null and oauth_profile_id is null )),*/
  CONSTRAINT chk_user_id check (user_account_id ~ '^[0-9a-zA-Z]{25}$')
);

CREATE TABLE "oauth_login" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "userAccountId" int NOT NULL REFERENCES user_account(id),
  "oauthId" int NOT NULL REFERENCES oauth(id),
  "oauth_profile_id" varchar(257),
  "access_token" varchar(257),
  "refresh_token" varchar(257),
  "created_at" timestamp  without time zone default (now() at time zone 'utc'),
  "updated_at" timestamp without time zone default (now() at time zone 'utc')
);

CREATE TABLE "platform" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "platform_id" char(6) NOT NULL,
  "platform_name" varchar(257) NOT NULL,
  "userAccountId" int NOT NULL REFERENCES user_account(id),
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
  CONSTRAINT chk_plat_id check (platform_id ~ '^[0-9a-zA-Z!@-_#]{6}$') 
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

ALTER TABLE user_account ALTER user_account_id SET DEFAULT random_userID(25);
ALTER TABLE platform ALTER platform_id SET DEFAULT random_userID(6);

INSERT INTO oauth ("oauth_name") VALUES ('Facebook'),('Google'),('LinkedIn');