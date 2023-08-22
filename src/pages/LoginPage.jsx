import styled from 'styled-components';
import Wrap from '../styled/Wrap.styled';

const Title = styled.h1`
  font-size: 35px;
  font-weight: 500;
`;

export default function LoginPage() {
  return (
    <Wrap>
      <Title>Login here</Title>
    </Wrap>
  );
}
