import { gQL } from '@apollo/client';

export const Get_me = gQL`
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
}`;
