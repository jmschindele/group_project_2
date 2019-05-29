USE axdpvn7mhhbngbno;

INSERT INTO Users (userName,  `password`, hint, createdAt, updatedAt)
SELECT "robin3" as userName, "three" as `password`, "How mnay blind mice?" as hint, now() as createdAt , now() as updatedAt 
where not exists (select null from Users where userName = 'robin3');

INSERT INTO Spouses (spouseName, createdAt, updatedAt, UserId)
SELECT 'Geri' as spouseName , now() as createdAt, now() as updatedAt, id as UserId FROM Users where userName = 'robin3' 
and not exists (select null from Spouses where spouseName = 'Geri' and UserID = (select id FROM Users where userName = 'robin3' ) );

delete from Interests where SpouseId = (select id from Spouses where UserID = (select id FROM Users where userName = 'robin3' ));

INSERT INTO Interests (`type`,`note`, createdAt, updatedAt, `SpouseId`)
SELECT 1 as `type`, 'ice cream' as note, now() as createdAt, now() as updatedAt, id as SpouseId from Spouses where UserID = (select id FROM Users where userName = 'robin3' ) ;

INSERT INTO Interests (`type`,`note`, createdAt, updatedAt,`SpouseId`)
SELECT 1 as `type`, 'puppies' as note, now() as createdAt, now() as updatedAt, id as SpouseId from Spouses where UserID = (select id FROM Users where userName = 'robin3' ) ;

INSERT INTO Interests (`type`, note, createdAt, updatedAt, SpouseId)
SELECT 0 as `type`, 'spiders' as note, now() as createdAt, now() as updatedAt, id as SpouseId from Spouses where UserID = (select id FROM Users where userName = 'robin3' ) ;

INSERT INTO Interests (`type`, note , createdAt, updatedAt, SpouseId )
SELECT 0 as `type`, 'sweatpants that look like bluejeans' as note, now() as createdAt, now() as updatedAt, id as SpouseId from Spouses where UserID = (select id FROM Users where userName = 'robin3' ) ;

delete from Lovelangs where SpouseId = (select id from Spouses where UserID = (select id FROM Users where userName = 'robin3' ));

INSERT INTO lovelangs ( LoveLanguage1, LoveLanguage2, LoveLanguage3, LoveLanguage4, LoveLanguage5, createdAt, updatedAt, SpouseId )
SELECT 'Gifts' as LoveLanguage1, 'Physical Touch' as LoveLanguage2, '', '', '',  now() as createdAt, now() as updatedAt, id as SpouseId 
from Spouses where UserID = (select id FROM Users where userName = 'robin3' ) ;

delete from Dates where SpouseId = (select id from Spouses where UserID = (select id FROM Users where userName = 'robin3' ));

INSERT INTO axdpvn7mhhbngbno.dates (`date`,`event`, createdAt, updatedAt, `SpouseId`)
select '1952-01-29' as 'date', 'Bitrthday' as 'event',  now() as createdAt, now() as updatedAt, id as SpouseId 
from Spouses where UserID = (select id FROM Users where userName = 'robin3' ) ;

INSERT INTO axdpvn7mhhbngbno.dates (`date`,`event`, createdAt, updatedAt, `SpouseId`)
select '1995-04-29' as 'date', 'Wedding Aniversery' as 'event',  now() as createdAt, now() as updatedAt, id as SpouseId 
from Spouses where UserID = (select id FROM Users where userName = 'robin3' ) ;



SELECT * FROM Users;
select * from Spouses;
select * from Interests;
select * from Lovelangs; 
select * from Dates;

SELECT `id`, `date`, `event` FROM `Dates` AS `Dates` WHERE `Dates`.`SpouseId` = '1' ORDER BY `Dates`.`date` ASC, `Dates`.`event` ASC;

