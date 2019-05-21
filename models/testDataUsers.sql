use duet_testdb;

INSERT INTO duet_testdb.users (userName,  `password`, hint, createdAt, updatedAt)
VALUES ( "robin3", "three", "How mnay blind mice?", now(), now() );


SELECT * FROM duet_testdb.users;