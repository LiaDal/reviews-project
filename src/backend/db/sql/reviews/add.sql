INSERT INTO reviews (
    title, groups, user_id, tags, content, rating
)
VALUES (
    ${title}, ${groups}, ${user_id}, ${tags}, ${content}, ${rating}
)
RETURNING *;