create TABLE user(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
) 

create TABLE review(
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

create TABLE groups(
  item VARCHAR(255)   
) 

create TABLE tags(
  tag VARCHAR(255)  
) 