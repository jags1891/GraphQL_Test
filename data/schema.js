import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolver';

const typeDefs =`
        type Friend {
            id : ID,
            firstName : String,
            lastName : String,
            gender : Gender,
            language : String,
            age : Int,
            email : String,
            contacts : [Contact]
        }
        type Alien {
            id : ID,
            firstName : String,
            lastName : String,
            planet : String
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
            language : String
            age : Int
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