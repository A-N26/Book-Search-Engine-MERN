import { gql } from '@apollo/client';

export const Get_me = gql`
    {
        me
        {
            _id
            username
            email
            savedBooks
            {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;
