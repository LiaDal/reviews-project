CREATE TABLE 'user'(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
) 

CREATE TABLE review(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    group VARCHAR(255),
    FOREIGN KEY (group) REFERENCES groups (item)
    tags VARCHAR(255),
    FOREIGN KEY (tags) REFERENCES tags (tag)
    content text,
    rating INTEGER,
    user_id INTEGER
) 

CREATE TABLE groups(
  item VARCHAR(255)   
) 

CREATE TABLE tags(
  tag VARCHAR(255)  
) 