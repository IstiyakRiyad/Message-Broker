const amqplib = require('amqplib');

const {
    RABBITMQ_HOST,     
    RABBITMQ_PORT,      
    RABBITMQ_USER,     
    RABBITMQ_PASS
} = process.env;

(async () => {
    // Make a connection to rabbitMQ
    const connection = await amqplib.connect({
        hostname: RABBITMQ_HOST,
        port: RABBITMQ_PORT,
        username: RABBITMQ_USER,
        password: RABBITMQ_PASS
    });

    const ch1 = await connection.createChannel();
    
    await ch1.assertQueue('hi');

    let count = 1;
    setInterval(() => {
        ch1.sendToQueue('hi', Buffer.from('Hello there. The count value is ' + count++));
    }, 2000);

})();