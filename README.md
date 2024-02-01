# Lab Exercise: How to Create a JWT with Expiry 🕒

## Objectives 🎯

- Learn to generate a JWT (JSON Web Token) with an expiration time to enhance the security of your full-stack applications.

- Understand the importance of expiry in JWTs for session management and user authentication.

## Prerequisites 📚

- Basic knowledge of Node.js and Express framework.

## Steps 🛠️

1. **Setup Your Project**: Initialize a new Node.js project and install the `jsonwebtoken` package.

2. **Generate a Secret Key**: Create a secret key to sign your tokens. Keep it secure and never expose it publicly.

3. **Create a JWT**: Use the `jsonwebtoken` package to create a JWT, incorporating a payload with user details and an expiry time.

4. **Set the Expiry**: Define the `expiresIn` option to specify the token's lifespan (e.g., `60 minutes`).

5. **Handle Token Expiry**: Implement logic to handle expired tokens, prompting the user to log in again.

6. **Testing**: Test your implementation by generating a token and using it in a protected route.

## Outcome 🎉

- You'll be able to create secure JWTs with expiry, enhancing the security and user experience of your full-stack applications.
