import {buildSchema} from 'graphql';

const schema = buildSchema (`
        type Friend {
            id : ID,
            firstName : String,
            lastName : String,
            gender : String,
            email : [Email] !

        }

        type Query {
            friend : Friend
        }

        type Email {
            email : String
        }
    `)

export default schema;