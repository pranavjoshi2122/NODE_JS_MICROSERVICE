## Getting Started

1. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

2. Build and start the services using Docker Compose:

    ```bash
    docker-compose up --build
    ```

   This command will download the necessary images, build the services, and start the containers.

3. Access the application:

   - User Service: [http://localhost:3000](http://localhost:3000)

## Services

### Service 1

- Description: Service 1 user service description.
- Endpoint: [http://localhost:3000](http://localhost:3000)

### Service 2

- Description: Service 2 for patient service description.

## Configuration

- Modify the environment variables in the `.env` file to customize the application settings.
- Note: In this application no `.env` fiel need to be configured.

## AWS
- We used AWS micro ec2 instance 
- In ec2 we use ubuntu 22.04 LTS
- Used docker for managing diff services and manage microservice

## Internal Communication

- Message Broker: Kafka is used for internal communication between services, ensuring efficient and reliable message delivery.

- Service Calls: All service-to-service calls are handled by Docker for streamlined management and orchestration.