/* Replace with your SQL commands *//* Replace with your SQL commands */
INSERT INTO application (id,name,auth_method,imglocation,direct_url_component) VALUES 
(1,'Mailchimp','oauth2','mailchimp','http://localhost:5001/bsupkit-45126/us-central1/app/api/oauth/app/mailchimp/connect?');

INSERT INTO service ("id","categoryId","applicationId","description","service_name") VALUES 
(1,1,1,'All-in-one marketing platform that helps you manage and talk to your clients, customers, and other interested parties','Mailchimp');

INSERT INTO metrics ("serviceId","name","detail","component") VALUES
(1,'New Subscribed Contacts','To Connect blablabl','mc_1'),
(1,'Subscribed Contact','Get Historical','mc_2'),
(1,'Recent Campaign Open Rate','To Connect blablabl','mc_3'),
(1,'Recent Campaign Click Rate','To Connect blablabl','mc_4'),
(1,'Audience Performance','To Connect blablabl','mc_5'),
(1,'Click Rate by Campaign','To Connect blablabl','mc_6'),
(1,'Open Rate by Campaign','To Connect blablabl','mc_7'),
(1,'Open Rate by Audience','To Connect blablabl','mc_8'),
(1,'Click Rate by Audience','To Connect blablabl','mc_9'),
(1,'Unique Opens by Campaign','To Connect blablabl','mc_10'),
(1,'Open Rate by Automations','To Connect blablabl','mc_11'),
(1,'Click Rate by Automations','To Connect blablabl','mc_12'),
(1,'Facebook Likes by Campaign','To Connect blablabl','mc_13'),
(1,'Forwards by Campaign','To Connect blablabl','mc_14'),
(1,'Unsubscribed Contacts by Audience','To Connect blablabl','mc_15'),
(1,'Cleaned Contacts by Audience','To Connect blablabl','mc_16'),
(1,'Sent Date by Campaign','To Connect blablabl','mc_17'),
(1,'Subscribed Contact by Campaign','To Connect blablabl','mc_18'),
(1,'Clicks by Campaign','To Connect blablabl','mc_19'),
(1,'Number of sends by Automation','To Connect blablabl','mc_20'),
(1,'Clicks by Automations','To Connect blablabl','mc_21'),
(1,'Unique Opens by Automations','To Connect blablabl','mc_22'),
(1,'Opens by Automations','To Connect blablabl','mc_23'),
(1,'Subscribers Clicks by Automations','To Connect blablabl','mc_24'),
(1,'Automations','To Connect blablabl','mc_25'),
(1,'Campaigns','To Connect blablabl','mc_26'),
(1,'Recent Campaign Industry Avg','To Connect blablabl','mc_27'),
(1,'Unsubscribed Contacts','To Connect blablabl','mc_28'),
(1,'Audiences','To Connect blablabl','mc_29'),
(1,'Automations Click Rate','To Connect blablabl','mc_30'),
(1,'Automations Open Rate','To Connect blablabl','mc_31'),
(1,'New Campaigns','To Connect blablabl','mc_32'),
(1,'Number of Campaigns by Audience','To Connect blablabl','mc_33'),
(1,'Hard Bounces by Campaign','To Connect blablabl','mc_34'),
(1,'Soft Bounces by Campaign','To Connect blablabl','mc_35'),
(1,'Syntax Errors by Campaign','To Connect blablabl','mc_36');


