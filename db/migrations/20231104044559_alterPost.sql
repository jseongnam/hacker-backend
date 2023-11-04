-- migrate:up
ALTER TABLE posts
ADD COLUMN img VARCHAR(255);

-- migrate:down

