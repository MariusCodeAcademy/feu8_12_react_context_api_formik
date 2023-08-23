import { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../store/AuthContext';

export default function Aside() {
  const ctx = useContext(AuthContext);
  console.log('ctx ===', ctx);
  return (
    <div>
      <h3>Additional info:</h3>
      {ctx.isUserLoggedIn && <p>User: {ctx.email}</p>}
    </div>
  );
}
