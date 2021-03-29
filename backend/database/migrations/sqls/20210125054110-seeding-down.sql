ALTER TABLE user_account ALTER COLUMN user_account_id DROP DEFAULT ;
ALTER TABLE platform ALTER COLUMN platform_id DROP DEFAULT ;

DROP TRIGGER update_customer_modtime  ON user_account ;
DROP TRIGGER update_customer_modtime  ON platform ;

DROP FUNCTION update_modified_column;
DROP FUNCTION random_userID;

DROP TABLE "platform";
DROP TABLE "oauth_login";
DROP TABLE "user_account";
DROP TABLE "oauth";

DROP DOMAIN cemail;
DROP EXTENSION pgcrypto;
DROP EXTENSION citext;

