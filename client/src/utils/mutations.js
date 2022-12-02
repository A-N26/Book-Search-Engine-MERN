import { gQL } from '@apollo/client';

export const ADD_USER = gQL`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser($username: $username, $email: $email, $password: $password) {
        token
        user {
            _id
            username
            email
        }
    }
}`;

export const LOGIN_USER = gQL`
mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password)
    {
        token
        user {
            _id
            username
        }
    }
}`;

export const SAVE_BOOK = gQL`
mutation saveBook($input: BookInput) {
    saveBook(input: $input) {
        _id
        username
        bookCount
        savedBooks {
            bookId
            authors
            image
            link
            title
            description
        }
    }
}`;

export const REMOVE_BOOK = gQL`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        username
        bookCount
        savedBooks {
            bookId
            authors
            image
            link
            title
            description
        }
    }
}`;
