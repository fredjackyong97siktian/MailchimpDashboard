/* Replace with your SQL commands *//* Replace with your SQL commands */
INSERT INTO application (id,name,auth_method,imglocation,direct_url_component) VALUES 
(1,'Mailchimp','oauth2','mailchimp','http://localhost:5001/bsupkit-45126/us-central1/app/api/oauth/app/mailchimp/connect?');

INSERT INTO service ("id","categoryId","applicationId","description","service_name") VALUES 
(1,1,1,'All-in-one marketing platform that helps you manage and talk to your clients, customers, and other interested parties','Mailchimp');

INSERT INTO metricsgroup("id","name") VALUES 
(1,'Audience'),
(2,'Automation'),
(3,'Campaign');

INSERT INTO metrics ("id","serviceId","metricsgroupId","name","displayName","detail","selection") VALUES
(1,1,1,'Subscribed Contacts','Subscribed Contacts','To display the total contacts have subscribed.',TRUE),
(2,1,1,'Unsubscribed Contacts','Unsubscribed Contacts','To display the total contacts have unsubscribed.',TRUE),
(3,1,1,'Audience Performance','Audience Performance','Consist the information of subscribed and unsubscribed contacts.',TRUE),
(4,1,1,'Total Audiences','Total Audiences','To display the total audiences.',TRUE),
(5,1,3,'Click Rate by Campaign','Click Rate','To display the click rate of selected campaign',TRUE),
(6,1,3,'Open Rate by Campaign','Open Rate','To display the open rate of selected campaign',TRUE),
(7,1,3,'Unique Opens by Campaign','Unique Opens','To display the unique open of selected campaign',TRUE),
(8,1,3,'Campaign Performance','Campaign Performance','Consist the information of click and open rate and unique open by campaign',TRUE),
(9,1,3,'Total Campaign','Total Campaign','To display the total campaign',TRUE);