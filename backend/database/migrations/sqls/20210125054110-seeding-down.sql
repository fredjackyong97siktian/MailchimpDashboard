ALTER TABLE user_account ALTER COLUMN user_account_id DROP DEFAULT ;
ALTER TABLE platform ALTER COLUMN platform_id DROP DEFAULT ;

DROP TRIGGER update_customer_modtime  ON user_account ;
DROP TRIGGER update_customer_modtime  ON platform ;
DROP TRIGGER update_customer_modtime  ON application;
DROP TRIGGER update_customer_modtime  ON authentication ;
DROP TRIGGER update_customer_modtime  ON dashboard ;
DROP TRIGGER update_customer_modtime  ON role ;
DROP TRIGGER update_customer_modtime  ON role_dashboard_authorization ;
DROP TRIGGER update_customer_modtime  ON visual_presentation ;
DROP TRIGGER update_customer_modtime  ON plan ;
DROP TRIGGER update_customer_modtime  ON role_assigned ;

DROP FUNCTION update_modified_column;
DROP FUNCTION random_userID;

DROP TABLE "payment";
DROP TABLE "role_assigned";
DROP TABLE "subscription";
DROP TABLE "plan";
DROP TABLE "favourite";
DROP TABLE "visual_presentation";
DROP TABLE "visualization";
DROP TABLE "payment_method";
DROP TABLE "role_dashboard_authorization";
DROP TABLE "service";
DROP TABLE "role";
DROP TABLE "subchart";
DROP TABLE "chart";
DROP TABLE "dashboard";
DROP TABLE "subcategory";
DROP TABLE "category";
DROP TABLE "platform_setting_authorization";
DROP TABLE "platform_setting";
DROP TABLE "authentication";
DROP TABLE "application";
DROP TABLE "platform";
DROP TABLE "user_account";

DROP DOMAIN cemail;
DROP EXTENSION pgcrypto;
DROP EXTENSION citext;
