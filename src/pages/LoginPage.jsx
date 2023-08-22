import styled from 'styled-components';
import Wrap from '../styled/Wrap.styled';
import { useFormik } from 'formik';

const Title = styled.h1`
  font-size: 35px;
  font-weight: 500;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  border: 1px solid #777;
  display: block;
  width: 300px;
  margin-bottom: 10px;
`;

const SubmitBnt = styled.button.attrs({
  type: 'submit',
})`
  background-color: #333;
  color: white;
`;

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('forma pateikta, duomenys:', values);
    },
  });

  console.log('formik.values ===', formik.values);

  return (
    <Wrap>
      <Title>Login here</Title>
      <form onSubmit={formik.handleSubmit}>
        <Input
          onChange={formik.handleChange}
          value={formik.values.email}
          type='text'
          placeholder='Email'
          id='email'
        />
        <Input
          onChange={formik.handleChange}
          value={formik.values.password}
          type='password'
          placeholder='Password'
          id='password'
        />
        <SubmitBnt>Login</SubmitBnt>
      </form>
    </Wrap>
  );
}
