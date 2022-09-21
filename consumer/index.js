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
    const ch2 = await connection.createChannel();

    await ch1.assertQueue('hi');

    ch1.consume('hi', (msg) => {
        if(msg !== null) {
            console.log('Received: ', msg.content.toString());
            ch1.ack(msg);
        }
        else {
            console.log('Consumer cancelled by server');
        }
    });

    ch2.consume('hi', (msg) => {
        if(msg !== null) {
            console.log('Received: ', msg.content.toString());
            ch2.ack(msg);
        }
        else {
            console.log('Consumer cancelled by server');
        }
    })

})();