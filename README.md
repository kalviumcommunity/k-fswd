# Lab Exercise: Comprehensive Docker Compose Guide 🐳

## Objectives 🎯

- Master Docker Compose for orchestrating multi-container Docker applications.
- Efficiently define, manage, and scale your applications with Docker Compose.

## Prerequisites 🛠️

- Basic understanding of Docker and containerization concepts.

## Steps 📝

### 1. Install Docker Compose: 
- Begin by installing [Docker Compose](https://docs.docker.com/compose/install/) on your machine to set up your development environment.

### 2. Understand `docker-compose.yml`
The `docker-compose.yml` file is where you define your Docker application's services, networks, and volumes. Here's a quick overview of its key components:
- **Version:** Specifies the Docker Compose file format version.
- **Services:** The set of containers your application uses.
  - **image/build:** Specifies the Docker image or the build context.
  - **ports:** Maps container ports to host ports.
  - **volumes:** Mounts host paths or named volumes.
  - **depends_on:** Defines dependencies between services.
  - **environment:** Sets environment variables within the container.
- **Networks:** Custom networks for inter-service communication.
- **Volumes:** Declares persistent data volumes.

### 3. Create and Run Your Application
- Write a `docker-compose.yml` file defining your application.
- Use `docker-compose up` to start your application.

### 4. Manage Your Application
- **View running containers:** `docker-compose ps`
- **Stop your application:** `docker-compose down`
- **View logs:** `docker-compose logs`
- **Execute commands in a service:** `docker-compose exec service_name command`

## Example `docker-compose.yml`
```yaml
version: '3.8'
services:
  web:
    build: ./server // use the docker file which you have build in previous plu 
    ports:
      - 3000:3000
    environment:
      - DB_URL: mongoDB://db/dbname
  db:
    image: mongo:4.0-xenial
    ports:
        - 27017:2707
```

## Outcome 🌟

- You'll be equipped to orchestrate complex, multi-container applications with Docker Compose, leveraging `docker-compose.yml` for efficient configuration and management.
