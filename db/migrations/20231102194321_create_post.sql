-- migrate:up
CREATE TABLE posts(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    title varchar(100) NOT NULL,
    content varchar(1000) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)

);

-- migrate:down
DROP TABLE posts;

