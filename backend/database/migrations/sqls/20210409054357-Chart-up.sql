/* Replace with your SQL commands */
INSERT INTO chart ("id","name") VALUES
(1,'Line'),
(2,'Card'),
(3,'Table'),
(4,'Card_Line');

INSERT INTO subchart ("id","chartId","subchart_name","reference_component") VALUES
(1,1,'Time Series','timeSeries'),
(2,2,'Summary Card','summaryCard'),
(3,3,'Normal Table','normalTable'),
(4,4,'Summary Card + Horinzontal Line','cardLine'),
(5,2,'Multiple Summary Card','multiSummaryCard');

INSERT INTO visualization ("id","metricsId","subchartId","isDefault","api") VALUES
(1,1,2,TRUE,''),
(2,1,4,FALSE,''),
(3,2,2,TRUE,''),
(4,2,4,FALSE,''),
(5,3,5,TRUE,''),
(6,3,3,FALSE,''),
(7,4,2,TRUE,''),
(8,4,3,FALSE,''),
(9,4,4,FALSE,''),
(10,5,2,TRUE,''),
(11,5,4,FALSE,''),
(12,6,2,TRUE,''),
(13,6,4,FALSE,''),
(14,7,2,TRUE,''),
(15,7,4,FALSE,''),
(16,8,5,TRUE,''),
(17,8,3,FALSE,''),
(18,9,2,TRUE,''),
(19,9,3,FALSE,''),
(20,9,4,TRUE,'');