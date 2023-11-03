-- migrate:up
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(20) NOT NULL,
    nickname VARCHAR(20),
    email VARCHAR(50) NOT NULL,
    password VARCHAR(20) NOT NULL,
    number_of_posts INT DEFAULT 0,
    number_of_records INT DEFAULT 0,
    number_of_visit INT DEFAULT 0,
    number_of_comment INT DEFAULT 0,
    PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE users;
