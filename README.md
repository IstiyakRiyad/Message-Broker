# 
<div align="center">
  <h1>Message Broker</h1>
  <h2 color=orange><a href="https://www.rabbitmq.com/">RabbitMQ</a></h2>
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






```
## Project Trafics
* `<a href="http://localhost:8088" >Trafic</a>`
* `dist/index.js` - Start point of production files
* `coverage/lcov-report/index.html` - Testing coverage file(open with browser)

