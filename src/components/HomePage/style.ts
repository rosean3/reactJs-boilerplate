import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    font-size: 20px;
    margin-top: 24px;
    line-height: 32px;
  }

  img {
    width: 40%;
  }
`;
