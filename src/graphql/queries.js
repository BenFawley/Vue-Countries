import gql from 'graphql-tag';

export const ALL_COUNTRIES_QUERY = gql`
  query getAllCountries($offset: Int){
  countries(first: 20, offset: $offset) {
    edges {
      node {
        name
        capital
        alpha3Code
      }
    }
  }
}`;

export const SEARCHED_COUNTRY_QUERY = gql`
query getSearchedCountry($searchValue: String!){
  countries(first: 20, name_Istartswith: $searchValue) {
    edges {
      node {
        name
        capital
        alpha3Code
      }
    }
  }
}`;

export const GET_COUNTRY_BY_ALPHA3CODE = gql`query getCountryByCode($alpha3Code:String!){
    countries(alpha3Code: $alpha3Code) {
      edges {
        node {
          name
          capital
          alpha3Code
          population
        }
      }
    }
  }`;