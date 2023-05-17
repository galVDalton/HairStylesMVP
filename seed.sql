INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('short' , 'ponytail' , 'short_crew.jpeg' , 'youtube.com//crewcut');
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('short' , 'ponytail' , 'short_crew.jpeg' , 'u4tKuizMo60');
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('short' , 'ponytail' , 'short_crew.jpeg' , 'u4tKuizMo60');


INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('medium' , 'ponytail' , 'short_crew.jpeg' , 'u4tKuizMo60');
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('medium' , 'ponytail' , 'short_crew.jpeg' , 'u4tKuizMo60');
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('medium' , 'ponytail' , 'short_crew.jpeg' , 'u4tKuizMo60');


INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('long' , 'long_dreadlocks' , 'long_dreadlocks.jpg' , 'u4tKuizMo60');
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('long' , 'long_dreadlocks' , 'long_dreadlocks.jpg' , 'u4tKuizMo60');
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('long' , 'long_dreadlocks' , 'long_dreadlocks.jpg' , 'u4tKuizMo60');

-- long hair - dread locks
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) VALUES ('long' , 'long_dreadlocks' , 'long_dreadlocks.jpg' , 'u4tKuizMo60');
INSERT INTO products ( description, image_src, buy_link )
VALUES ('locking_gel' , 'locking_gel.jpeg'  , 'https://www.greatlocs.com/product/locking-gel/' ) ; 
INSERT INTO products ( description, image_src, buy_link )
VALUES ('dread_gel' , 'dread_gel.jpeg'  , 'https://www.amazon.com/Locking-Dreads-Moisturizer-Dreadlocks-Locks/dp/B07XYH7JGH/ref=sr_1_1_sspa?crid=3TXFAR6R7F6MH&keywords=dread+wax&qid=1684013501&sprefix=dread+wax%2Caps%2C159&sr=8-1-spons&psc=1&smid=AEY9UPV5JFCDJ&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFYQUVXR1JFWVk4UDAmZW5jcnlwdGVkSWQ9QTA0Mzk3MjJIVjJaWEtVVjJFWVMmZW5jcnlwdGVkQWRJZD1BMTAxNzQ0MkYzOVdYMTRNVFpKJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ== ' ) ; 
INSERT INTO table_ids ( hairsyles_id , products_id ) 

SELECT h.id, p.id
FROM hairstyles AS h
CROSS JOIN LATERAL ( SELECT * FROM products ) AS p
WHERE h.description = 'long_dreadlocks' AND p.description IN ('dread_gel', 'placeholder') ;

-- end of long hair - dread locks
