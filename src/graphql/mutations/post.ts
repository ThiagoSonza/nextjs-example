import { gql } from 'graphql-request';
import { GQL_FRAGMENT_POST } from '../fragments/post';

export const GQL_MUTATION_UPDATE_POST = gql`
  ${GQL_FRAGMENT_POST}

  mutation UPDATE_POST($id: ID!, $title: String, $description: String) {
  #   updatePost(
  #     input: { where: { id: $id }, data: { title: $title, content: $content } }
  #   ) {
  #     post {
  #       ...post
  #     }
  #   }
  # }

  # mutation UPDATE_POST {
    updateBlog(
      id: $id
      data: { title: $title, description: $description }
    ) {
      data {
        attributes {
          ...post
        }
      }
    }
  }
`;

export const GQL_MUTATION_CREATE_POST = gql`
  ${GQL_FRAGMENT_POST}

  mutation CREATE_POST($title: String!, $description: String!) {
    # createPost(input: { data: { title: $title, content: $content } }) {
    #   post {
    #     ...post
    #   }
    # }
    createBlog(data: { title: $title, description: $description }) {
      data {
        attributes {
          ...post
        }
      }
    }
  }
`;

export const GQL_MUTATION_DELETE_POST = gql`
  ${GQL_FRAGMENT_POST}

  # mutation DELETE_POST($id: ID!) {
  #   deletePost(input: { where: { id: $id } }) {
  #     post {
  #       ...post
  #     }
  #   }
  # }

  mutation DELETE_POST($id: ID!){
    deleteBlog(id: $id) {
      data {
        attributes {
          ...post
        }
      }
    }
  }
`;
