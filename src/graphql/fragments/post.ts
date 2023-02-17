import { gql } from 'graphql-request';

export const GQL_FRAGMENT_POST = gql`
  fragment post on Blog {
    title
    description
    updatedAt
    createdAt
    user {
      data {
        attributes {
          username
          email
        }
      }
    }
  }
`;
