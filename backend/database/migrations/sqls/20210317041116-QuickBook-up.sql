/* Replace with your SQL commands *//* Replace with your SQL commands */
INSERT INTO application (id,name,auth_method,imglocation,direct_url_component) VALUES 
(2,'QuickBook','oauth2','quickbooks','http://localhost:5001/bsupkit-45126/us-central1/app/api/oauth/app/quickbook/connect');

INSERT INTO category (id, name, isactive) VALUES 
(2, 'Finance',true);

INSERT INTO service ("id","categoryId","applicationId","description","service_name") VALUES 
(2,2,2,'A sofware that provide service like Online Accounting.','QuickBooks');

INSERT INTO scope ("serviceId",name,term) VALUES 
(2,'Accounting','com.intuit.quickbooks.accounting'),
(2,'Payroll(whitelisted)','com.intuit.quickbooks.payroll'),
(2,'Timetracking(whitelisted)','com.intuit.quickbooks.payroll.timetracking'),
(2,'Benefit(whitelisted)','com.intuit.quickbooks.payroll.benefits');