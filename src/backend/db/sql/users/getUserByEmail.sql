SELECT * FROM users WHERE email='${newEmail}';
RETURNING id;