import gql from 'graphql-tag';

export const getCardQuery = gql`
  query GetCard($number: Int!) {
    getCard(number: $number) {
      number
      type
      ... on SziCard {
        levels {
          red {
            zombie
            amount
          }
          orange {
            zombie
            amount
          }
          yellow {
            zombie
            amount
          }
          blue {
            zombie
            amount
          }
        }
      }
      ... on ActivationCard {
        levels {
          red {
            zombie
          }
          orange {
            zombie
          }
          yellow {
            zombie
          }
          blue {
            zombie
          }
        }
      }
    }
  }
`;
