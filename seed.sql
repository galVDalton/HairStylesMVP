-- hairstyles tables
-- short
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('Short' , 'high_and_tight' , 'high_and_tight.webp' , 'Z6_MNzWButY');
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('Short' , 'side_part' , 'side_part.webp' , 'qapbXgLSDic?start=67');
-- medium
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('Medium' , 'modern_slick_back' , 'slick_back.webp' , '8kP0XdyXWOU?start=192');
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('Medium' , 'the_quiff' , 'the_quiff.webp' , '89snaAry9eI?start=67');
-- long
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('Long' , 'slicked_man_bun' , 'slick_back_man_bun.webp' , 'gVdIxN69Wzk');
INSERT INTO hairstyles ( hair_length, description, image_src, youtube_link ) 
VALUES ('Long' , 'long_dreadlocks' , 'long_dreadlocks.jpg' , 'iNKgD3JQaws?start=35');
-- end of hairstyles tables

-- product tables
-- short
INSERT INTO products ( description, image_src, buy_link )
VALUES ('Texture & Volume Styling Powder' , 'texture_powder.webp' 
 , 'https://peteandpedro.com/collections/new/products/texture-hair-styling-volume-powder' ) ; 
INSERT INTO products ( description, image_src, buy_link )
VALUES ('Layrite Original Pomade' , 'pomade.jpg' 
 , 'https://www.amazon.com/Layrite-ORIGINAL0401-Pomade-Original-120g/dp/B01MA55K6I?tag=hespokestyle-ssc-391848-20&ascsubtag=6368962215' ) ; 
-- medium
INSERT INTO products ( description, image_src, buy_link )
VALUES ('Original Styling Meraki' , 'original_styling_maraki.webp' 
 , 'https://blumaan.com/products/original-styling-meraki' ) ; 
-- long
INSERT INTO products ( description, image_src, buy_link )
VALUES ('Locking Gel' , 'locking_gel.jpg' 
 , 'https://www.greatlocs.com/product/locking-gel/' ) ; 
-- end of product tables

-- table that joins hairstyles and products
-- short
INSERT INTO table_ids ( hairsyles_id , products_id ) 
SELECT h.id, p.id
FROM hairstyles AS h
CROSS JOIN LATERAL ( SELECT * FROM products ) AS p
WHERE h.description = 'high_and_tight' 
AND p.description IN ('Texture & Volume Styling Powder') ;

INSERT INTO table_ids ( hairsyles_id , products_id ) 
SELECT h.id, p.id
FROM hairstyles AS h
CROSS JOIN LATERAL ( SELECT * FROM products ) AS p
WHERE h.description = 'side_part' 
AND p.description IN ('Layrite Original Pomade') ;

-- medium
INSERT INTO table_ids ( hairsyles_id , products_id ) 
SELECT h.id, p.id
FROM hairstyles AS h
CROSS JOIN LATERAL ( SELECT * FROM products ) AS p
WHERE h.description = 'modern_slick_back' 
AND p.description IN ('Layrite Original Pomade') ;

INSERT INTO table_ids ( hairsyles_id , products_id ) 
SELECT h.id, p.id
FROM hairstyles AS h
CROSS JOIN LATERAL ( SELECT * FROM products ) AS p
WHERE h.description = 'the_quiff' 
AND p.description IN ('Original Styling Meraki') ;

-- long
INSERT INTO table_ids ( hairsyles_id , products_id ) 
SELECT h.id, p.id
FROM hairstyles AS h
CROSS JOIN LATERAL ( SELECT * FROM products ) AS p
WHERE h.description = 'slicked_man_bun' 
AND p.description IN ('Layrite Original Pomade') ;

INSERT INTO table_ids ( hairsyles_id , products_id ) 
SELECT h.id, p.id
FROM hairstyles AS h
CROSS JOIN LATERAL ( SELECT * FROM products ) AS p
WHERE h.description = 'long_dreadlocks' 
AND p.description IN ('Locking Gel') ;
-- end of table that joins hairstyles and products

