import styled from 'styled-components';
import Wrap from '../styled/Wrap.styled';
import Posts from '../components/Posts';

const Title = styled.h1`
  font-size: 35px;
  font-weight: 500;
`;
export default function AboutPage() {
  return (
    <Wrap>
      <Title>AboutPage</Title>
      <p>Welcome to our page</p>
      <Posts />
    </Wrap>
  );
}
