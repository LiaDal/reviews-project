INSERT INTO tags (
    id, tag_name
VALUES (
    ${id}, ${tag_name}
)
RETURNING *;