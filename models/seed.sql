use duet_testdb;

INSERT INTO users (userName,  `password`, hint, createdAt, updatedAt)
SELECT "robin3" as userName, "three" as `password`, "How mnay blind mice?" as hint, now() as createdAt , now() as updatedAt 
where not exists (select null from users where userName = 'robin3');

INSERT INTO spouses (spouseName, createdAt, updatedAt, UserId)
SELECT 'Geri' as spouseName , now() as createdAt, now() as updatedAt, id as UserId FROM users where userName = 'robin3' 
and not exists (select null from spouses where spouseName = 'Geri' and UserID = (select id FROM users where userName = 'robin3' ) );

delete from interests where SpouseId = (select id from Spouses where UserID = (select id FROM users where userName = 'robin3' ));

INSERT INTO interests (`type`,`note`, createdAt, updatedAt, `SpouseId`)
SELECT 1 as `type`, 'ice cream' as note, now() as createdAt, now() as updatedAt, id as SpouseId from spouses where UserID = (select id FROM users where userName = 'robin3' ) ;

INSERT INTO interests (`type`,`note`, createdAt, updatedAt,`SpouseId`)
SELECT 1 as `type`, 'puppies' as note, now() as createdAt, now() as updatedAt, id as SpouseId from spouses where UserID = (select id FROM users where userName = 'robin3' ) ;

INSERT INTO interests (`type`, note, createdAt, updatedAt, SpouseId)
SELECT 0 as `type`, 'spiders' as note, now() as createdAt, now() as updatedAt, id as SpouseId from spouses where UserID = (select id FROM users where userName = 'robin3' ) ;

INSERT INTO interests (`type`, note , createdAt, updatedAt, SpouseId )
SELECT 0 as `type`, 'sweatpants that look like bluejeans' as note, now() as createdAt, now() as updatedAt, id as SpouseId from spouses where UserID = (select id FROM users where userName = 'robin3' ) ;


SELECT * FROM users;
select * from spouses;
select * from interests;