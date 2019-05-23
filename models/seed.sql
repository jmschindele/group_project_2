use duet_testdb;

INSERT INTO users (userName,  `password`, hint, createdAt, updatedAt)
SELECT "robin3" as userName, "three" as `password`, "How mnay blind mice?" as hint, now() as createdAt , now() as updatedAt 
where not exists (select null from users where userName = 'robin3');

INSERT INTO spouses (spouseName, createdAt, updatedAt, UserId)
SELECT 'Geri' as spouseName , now() as createdAt, now() as updatedAt, id as UserId FROM users where userName = 'robin3' 
and not exists (select null from spouses where spouseName = 'Geri' and UserID = (select id FROM users where userName = 'robin3' ) );

SELECT * FROM users;
select * from spouses;