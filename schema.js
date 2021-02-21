import {buildSchema} from 'graphql';

const schema = buildSchema (`
        type Friend {
            id : ID,
            firstName : String,
            lastName : String,
            gender : Gender,
            email : String

        }

        type Query {
            getFriend(id: ID) : Friend
        }

        type Email {
            email : String
        }

        enum Gender {
            MALE,
            FEMALE,
            OTHER
        }

        input FriendInput {
            id : ID,
            firstName : String,
            lastName : String,
            gender : Gender,
            email : String
        }

        type Mutation {
            createFriend(input: FriendInput) : Friend
        }

    `)

export default schema;