import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './resolver'



const app = express();
app.get('/', (req, res) => {
    res.send('GraphQL is amazing');
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, ()=> console.log("running on server port localhost:8080/graphql"));