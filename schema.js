import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolver';

const typeDefs =`
        type Friend {
            id : ID,
            firstName : String,
            lastName : String,
            gender : Gender,
            email : String,
            contacts : [Contact]
        }

        type Query {
            getFriend(id: ID) : Friend
        }

        type Email {
            email : String
        }

        type Contact {
            firstName : String,
            gender : Gender,
            email : String
        }

        enum Gender {
            MALE,
            FEMALE,
            OTHER
        }

        input FriendInput {
            id : ID
            firstName : String
            lastName : String
            gender : Gender
            email : String
            contacts : [ContactInput]
        }

        input ContactInput {
            firstName : String
            lastName : String
            gender : Gender
            email : String
        }

        type Mutation {
            createFriend(input: FriendInput) : Friend
        }

    `;

const schema = makeExecutableSchema({typeDefs, resolvers});

export {schema};