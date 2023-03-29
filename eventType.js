import avro from 'avsc'


export default avro.Type.forSchema({
    type: 'record',
    fields: [
      {
        name: 'category',
        type: { type: 'enum', symbols: ['client', 'user'] }
      },
      {
        name: 'name',
        type: 'string',
      }
    ]
  });