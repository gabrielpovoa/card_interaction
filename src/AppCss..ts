import styled from 'styled-components';

export const Container = styled.div`
      display: flex;

      @media screen and (max-width: 768px){
            flex-direction: column;
            padding: 2rem;
      }
`;
