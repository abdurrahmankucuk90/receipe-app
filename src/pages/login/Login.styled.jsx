import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 35rem;
  height: 35rem;
  background-color: #3e60cfaa;
  margin: 10rem auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: .5rem;
  border: 2px solid white;
  
`;

export const innerDiv = styled.div`
    display: flex;
    flex-direction: column;

`;

export default LoginContainer;
