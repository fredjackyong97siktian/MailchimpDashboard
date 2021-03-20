/* Replace with your SQL commands *//* Replace with your SQL commands */
INSERT INTO application (id,name,auth_method,imglocation,direct_url_component) VALUES 
(3,'Mailchimp','oauth2','mailchimp','http://localhost:5001/bsupkit-45126/us-central1/app/api/oauth/app/mailchimp/connect?');

INSERT INTO category (id, name, isactive) VALUES 
(3, 'Marketing',true);

INSERT INTO service ("id","categoryId","applicationId","description","service_name") VALUES 
(3,3,3,'All-in-one marketing platform that helps you manage and talk to your clients, customers, and other interested parties','Mailchimp');

INSERT INTO scope ("serviceId",name,term) VALUES 
(3,'API Root',''),
(3,'Authorized Apps',''),
(3,'Automations',''),
(3,'Batch Operations',''),
(3,'Batch Webhooks',''),
(3,'Campaign Folders',''),
(3,'Campaigns',''),
(3,'Chimp Chatter Activity',''),
(3,'Connected Sites',''),
(3,'Conversations',''),
(3,'E-Commerce Stores',''),
(3,'Facebook Ads',''),
(3,'File Manager',''),
(3,'Landing Pages',''),
(3,'Lists/Audiences',''),
(3,'Ping',''),
(3,'Reporting',''),
(3,'Search Campaigns',''),
(3,'Search Members',''),
(3,'Step Actions',''),
(3,'Template Folders',''),
(3,'Templates',''),
(3,'Verified Domains','');

