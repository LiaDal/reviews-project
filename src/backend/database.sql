CREATE TABLE 'user'(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
) 

CREATE TABLE 'review'(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    group VARCHAR(255),
    FOREIGN KEY (group) REFERENCES groups (item)
    tags VARCHAR(255),
    FOREIGN KEY (tags) REFERENCES tags (tag)
    content VARCHAR(255),
    rating INTEGER,
    user_id
) 

CREATE TABLE 'groups'(
  item VARCHAR(255)   
) 

CREATE TABLE 'tags'(
  tag VARCHAR(255)  
) 