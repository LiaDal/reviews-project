CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    groups VARCHAR(255) NOT NULL,
    tags VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    rating INT
    -- user_id INT
    -- FOREIGN KEY (user_id)  REFERENCES users (id)
);