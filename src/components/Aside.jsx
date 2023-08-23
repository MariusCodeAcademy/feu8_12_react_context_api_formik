import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import AuthContext from '../store/AuthContext';

export default function Aside() {
  const ctx = useContext(AuthContext);
  const [time, setTime] = useState(null);
  // console.log('ctx ===', ctx);

  useEffect(() => {
    const int1 = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);

    return () => {
      // sitas kodas ivyksta pries pat sunaikinant komponena.
      clearInterval(int1);
      console.log('Aside destroyed');
    };
  }, []);

  // function timeNow() {
  //   setTime(15)
  // }
  // timeNow()
  return (
    <div>
      <h3>Additional info:</h3>
      {ctx.isUserLoggedIn && <p>User: {ctx.email}</p>}
      <h3>{time}</h3>
    </div>
  );
}
