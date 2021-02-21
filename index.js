import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();
app.get('/', (req, res) => {
    res.send('GraphQL is amazing');
});

const root = { friend: () => {
    return {
        "id": 5658489489,
        "firstName": "Jagadeesh",
        "lastName": "Bandlamudi",
        "gender": "Male",
        "email": [
            {email: "me1@me.com"},
            {email: "me2@me.com"},
            {email: "me3@me.com"},
    
        ]
    }
}};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, ()=> console.log("running on server port localhost:8080/graphql"));