/* Replace with your SQL commands */
INSERT INTO application (id,name,auth_method,imglocation,direct_url_component) VALUES 
(1,'Zoho People','oauth2','zoho','https://accounts.zoho.com/oauth/v2/auth?scope=ZOHOPEOPLE.employee.ALL,ZOHOPEOPLE.forms.READ&client_id=1000.NVBOOVBKCSHSNCLEKR7FC5V4TQIUCL&response_type=code&access_type=online&redirect_uri=http://localhost:5001/bsupkit-45126/us-central1/app/api/oauth/app/zoho/people/callback&prompt=consent');

INSERT INTO category (id, name, isactive) VALUES 
(1, 'Human Resource',true);

INSERT INTO service ("id","categoryId","applicationId","description","service_name","scope") VALUES 
(1,1,1,'Collecting the HR Information that used for analyzing your employee and payroll','Zoho People','{{"forms.READ"},{"employee.ALL"}}');