DROP TABLE IF EXISTS hairstyles ;
DROP TABLE IF EXISTS products ;
-- DROP TABLE IF EXISTS accessories ;
DROP TABLE IF EXISTS table_ids ;

CREATE TABLE hairstyles (
    id SERIAL PRIMARY KEY,
    hair_length TEXT NOT NULL,
    description TEXT NOT NULL,
    image_src TEXT NOT NULL,
    youtube_link TEXT NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    image_src TEXT NOT NULL,
    buy_link TEXT NOT NULL
);

-- CREATE TABLE accessories (
--     id SERIAL PRIMARY KEY,
--     description TEXT NOT NULL,
--     image_scr TEXT NOT NULL,
--     buy_link TEXT NOT NULL
-- );

CREATE TABLE table_ids (
  hairsyles_id INTEGER,
  products_id INTEGER,
--   accessories_id INTEGER
);

