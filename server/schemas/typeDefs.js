const { gQL } = require('apollo-server-express');

const typeDefs = gQL`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: String!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }
    input BookInput {
        bookId: String!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, username: String!, password: String!): Auth
        saveBook(input: BookInput): User
        removeBook(bookId: String!):User
    }
    type  Query {
        me: User
    }
    type Auth {
        token: ID!
        user: User
    }`;

module.exports = typeDefs;