CREATE DATABASE musicDb; 
USE musicDb; 

CREATE TABLE albums (
	id INT auto_increment primary key,
    title VARCHAR(255) not null,
	year VARCHAR(4) not null, 
    author VARCHAR(255) not null 
);

INSERT INTO albums (title, year, author)
VALUES ('OK Computer', 1997, 'Radiohead'); 

INSERT INTO albums (title, year, author)
VALUES ('Mezzanine', '1998', 'Massive Attack');

