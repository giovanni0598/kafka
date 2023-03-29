console.log('producer...')
import kafka from 'node-rdkafka'
import eventType from '../eventType.js';


const stream = kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
  }, {}, {
    topic: 'test'
  });
function queueMessage() {
    const event = {category:'client',name:'Giovanni Morais Reyna' }
    const success = stream.write(eventType.toBuffer(event))
    if(success){
        console.log('message wrote successfully to stream')
    }else{
        console.log('something went wrong...')
    }
}

setInterval(() => {
    queueMessage()
}, 3000)