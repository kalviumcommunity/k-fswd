# Lab Exercise: Containerizing a Node.js Application with Docker

## 🎯 Goals

- Master encapsulating your Node.js app within a Docker image for enhanced portability.
- Gain proficiency in utilizing the Docker build command to create efficient and portable container images.

## 📋 Before You Begin

- A grasp on the fundamentals of Node.js and Docker is required.

## 🚀 Instructions

1. **Setup Environment**: Begin by installing [Docker Desktop](https://docs.docker.com/desktop/) and [Node.js](https://nodejs.org/en/download/) on your machine to set up your development environment.

2. **Initialize Your Node.js Project**: Generate a `package.json` file by running `npm init -y` in your project directory. Create a `server.js` file to house your server code.

3. **Implement a Server Endpoint**: Add an endpoint to your server in `server.js` to verify its operational status i.e send a response that the server is running on `/` endpoint.

4. **Sign Up for Docker Hub**: (optional) Create a [Docker Hub](https://hub.docker.com/) account to share your Docker images with the world.

5. **Craft Your Dockerfile**: The Dockerfile lays out the blueprint for your Docker image. It should include:

```Dockerfile
FROM node
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]
```

- `FROM node`: Starts the build process from the Node.js base image.
- `WORKDIR /app`: Sets the working directory inside your Docker container.
- `COPY . /app`: Copies your local project files into the working directory in the container.
- `RUN npm install`: Installs your project dependencies.
- `EXPOSE 3000`: Informs Docker that the container listens on port 3000.
- `CMD ["node", "server.js"]`: Specifies the command to run your app.

6. **Build Your Docker Image**: Create your Docker image using the command `docker build -t yourDockerHubUserName/projectName:version .`. Replace placeholders with your Docker Hub username, project name, and version. Verify the creation of your image via Docker Desktop.

7. **Launch Your Docker Container**: Deploy your container with `docker container run -d -p 3000:3000 imageName:version`. This maps port 3000 of the container to port 3000 on your host, allowing you to access your Node.js server.

8. **Terminate Your Docker Container**: Identify the running containers with `docker container ls`. Stop your container using `docker container stop [CONTAINER ID]`, substituting `[CONTAINER ID]` with the actual ID.

9. **Share Your Image**: (optional) Distribute your Docker image by pushing it to Docker Hub with `docker push imageName:version`.

10. **Distribute Your Image**: (optional) Others can now retrieve your image using `docker pull imageName:version`.

## ✅ Results

- You've successfully containerized your Node.js application, making it ready for seamless deployment anywhere Docker is supported. 🚢
