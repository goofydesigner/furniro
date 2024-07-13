import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// auth context imports
import { useAuth } from '../../utils/AuthContext';

import './signin.scss';

const Signin = () => {
  const { user, signInUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const signinForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const handleSubmitSignin = async (event) => {
    event.preventDefault();

    const email = signinForm.current.email.value;
    const password = signinForm.current.password.value;

    // console.log('email: ', email, '\npassword: ', password);
    const userInfo = { email, password };

    const result = await signInUser(userInfo);
    if (result.success) {
      navigate('/');
    } else {
      console.log(result.message);
      // setError(result.error.message);
    }
  };

  return (
    <div className="signin">
      <h1>Sign in</h1>

      <form onSubmit={handleSubmitSignin} ref={signinForm}>
        <label htmlFor="email">Email id:</label>
        <input type="email" name="email" id="email" placeholder="Email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password" required />

        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};

export default Signin;
