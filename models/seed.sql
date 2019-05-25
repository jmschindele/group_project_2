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

delete from lovelangs where SpouseId = (select id from Spouses where UserID = (select id FROM users where userName = 'robin3' ));

INSERT INTO lovelangs ( LoveLanguage, Priority, createdAt, updatedAt, SpouseId )
SELECT 'Gifts' as LoveLanguage, 2 as Priority, now() as createdAt, now() as updatedAt, id as SpouseId 
from spouses where UserID = (select id FROM users where userName = 'robin3' ) ;

INSERT INTO lovelangs ( LoveLanguage, Priority, createdAt, updatedAt, SpouseId )
SELECT 'Physical Touch' as LoveLanguage, 1 as Priority, now() as createdAt, now() as updatedAt, id as SpouseId 
from spouses where UserID = (select id FROM users where userName = 'robin3' ) ;

<<<<<<< HEAD
SELECT * FROM Users;
select * from Spouses;
select * from Interests;
=======
SELECT * FROM users;
select * from spouses;
select * from interests;
select * from lovelangs; 
>>>>>>> b7b58229307134031875a79cc3f5be868a496ea9
