// Node.js require:
const Ajv = require('ajv');

const schema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            // test: false,
            errorMessage: '长度不够',
            // format:'test'
            // format: 'email',
            minLength: 10,
        },
        age: {
            type: 'number',
        },
        pets: {
            type: 'array',
            items: { type: 'string' },
        },
        isWorker: {
            type: 'boolean',
        }
    },
    required: ['name', 'age']
}
 
const ajv = new Ajv({allErrors: true}); // options can be passed, e.g. {allErrors: true}
require('ajv-errors')(ajv)
// ajv.addFormat('test', (data) => {
//     console.log(data, ' ------------ ')
//     return data === 'test'
// })

// ajv.addKeyword('test', {
//     macro() {
//         return {
//             minLength: 10
//         }
//     }
    // compile(sch, parentSchema) {
    //     console.log(sch, parentSchema, ' ------------ ')
    //     return () => true
    // },
    // metaSchema: {
    //     type: 'boolean'
    // }
    // validate(schema, data) {
    //     if(schema === true) return true
    //     else return schema.length === 6
    // }
// })
const validate = ajv.compile(schema);
const valid = validate({
    name: 'test',
    age: 20,
    pets: ['Mickey', 'Minnie'],
    isWorker: true
});
if(!valid) console.log(validate.errors)