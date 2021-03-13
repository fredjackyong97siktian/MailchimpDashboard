ALTER TABLE service ADD service_name varchar(256);

UPDATE service SET service_name = 'Facebook Ads' WHERE id = 1;
UPDATE service SET service_name = 'Facebook Page' WHERE id = 2;
UPDATE service SET service_name = 'LinkedIn' WHERE id = 3;

INSERT INTO application (id,name,auth_method,imglocation,direct_url_component) VALUES 
(3,'Zoho People','oauth2','zoho','');

INSERT INTO service ("id","categoryId","applicationId","description","service_name") VALUES 
(4,3,3,'Collecting the HR Information that used for analyzing your employee and payroll','Zoho People');