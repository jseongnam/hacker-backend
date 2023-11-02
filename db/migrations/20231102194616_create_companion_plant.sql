-- migrate:up
CREATE TABLE companion_plants(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    date timestamp DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE companion_plants;
