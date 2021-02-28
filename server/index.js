import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';

// A document schema in MongoDB with Mongoose
const Todo = mongoose.model('Todo', {
  text: String,
  complete: Boolean,
});

// Documentation in GraphQL playground
const typeDefs = `
  type Query {
    todos: [Todo]
  }
  type Todo {
    id: ID!
    text: String!
    complete: Boolean!
  }
  type Mutation {
    createTodo(text: String!): Todo
    updateTodo(id: ID!, complete: Boolean!): Boolean
    removeTodo(id: ID!): Boolean
  }
`;

//Actuator units in GraphQL
const resolvers = {
  Query: {
    todos: () => Todo.find(),
  },
  Mutation: {
    createTodo: async (_, { text }) => {
      const todo = new Todo({ text, complete: false });
      await todo.save();
      return todo;
    },
    updateTodo: async (_, { id, complete }) => {
      await Todo.findByIdAndUpdate(id, { complete });
      return true;
    },
    removeTodo: async (_, { id }) => {
      await Todo.findByIdAndRemove(id);
      return true;
    },
  },
};

const uri =
  'mongodb+srv://admin:root@123@cluster0.tdbpp.mongodb.net/TodolistDB?retryWrites=true&w=majority';
const server = new GraphQLServer({ typeDefs, resolvers });
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  server.start(() => console.log('Server is running on localhost:4000'));
});
