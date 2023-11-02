-- migrate:up
CREATE TABLE comments(
    id INT NOT NULL AUTO_INCREMENT,
    post_id INT NOT NULL,
    title varchar(100) NOT NULL,
    content varchar(1000) NOT NULL,
    date timestamp DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE comments;
