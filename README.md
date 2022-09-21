# 
<div align="center">
  <h1><a href="https://www.rabbitmq.com/"><img width=30% src="https://www.rabbitmq.com/img/logo-rabbitmq.svg"></a></h1>
  <h1>Message Broker</h1>
  <p>
    This is simple message broker application using RabbitMQ. Here contains two dockerize nodejs application that communicate with the help of RabbitMQ
  </p>
  <p>Author: <a href="https://github.com/IstiyakRiyad" target="_blank">Md. Istiyak Hossain</a> </p>
</div>


## Build Process:

``` bash
# Download repository:
git clone https://github.com/IstiyakRiyad/Message-Broker

# Go to parent directory:
cd Message-Broker/

# Make the .env file from .env.sample
cp .env.sample .env

# For development:
cd consumer/
npm i
cd ../publisher/
npm i
cd ..
docker-compose build
docker-compose up

# For production:
docker-compose -f docker-compose-prod.yml build
docker-compose -f docker-compose-prod.yml up

# Down the containers(development):
docker-compose down

# Down the containers(production):
docker-compose -f docker-compose-prod.yml down


```
## Project Trafics Management
#### Go to <a href="http://localhost:8088">`http://localhost:8088`</a> in your local machine for rabbitmq management info
<a href="http://localhost:8088" ><img width=150 src="https://www.rabbitmq.com/img/logo-rabbitmq.svg"></a>
![Management](https://user-images.githubusercontent.com/54698049/191612701-eca71f41-fd6f-4cb6-8486-e4bc2a8bd7b3.png)


