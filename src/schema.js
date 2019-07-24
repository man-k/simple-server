import { gql } from 'apollo-server-express'

import { say } from './resolves'


const definitions = gql`
  
  type Query
  {
    hello: String
  }
`;

const resolvers =
  {
    Query:
      {
        hello: () => say()
      }
  };

const schema = { typeDefs: definitions, resolvers: resolvers };

export default schema;