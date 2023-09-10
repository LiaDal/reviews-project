INSERT INTO users (
    name, email, password_hash
)
VALUES (
    ${name}, ${email}, ${password_hash}
)
RETURNING *;