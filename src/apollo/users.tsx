import { gql } from "@apollo/client";

export const USER_QUERY = gql`
  query users($filter: FilterUser, $pagination: InputPagination) {
    users(filter: $filter, pagination: $pagination) {
      pagination {
        total
        page
        perPage
        prev
        next
        totalPage
      }
      data {
        id
        email
        firstName
        lastName
      }
    }
  }
`;
