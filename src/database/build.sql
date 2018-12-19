BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    full_name VARCHAR(125) NOT NULL,
    -- organisation VARCHAR(225) NOT NULL,
    secret_santa INTEGER
);

INSERT INTO users (full_name) VALUES ('Hannah'), ('Charlie'), ('Lucy'), ('Oliver');

COMMIT;