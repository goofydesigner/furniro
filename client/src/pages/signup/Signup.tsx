import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// auth context imports
import { useAuth } from '../../utils/AuthContext';

import './signup.scss';

function Signup() {
  const navigate = useNavigate();
  const { user, signUpUser } = useAuth();
  const { error, setError } = useState(null);
  const signupForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();

    const name = signupForm.current.name.value;
    const email = signupForm.current.email.value;
    const password = signupForm.current.password.value;
    // console.log('name: ', name, '\nemail: ', email, '\npassword: ', password);

    const userInfo = { name, email, password };

    const result = await signUpUser(userInfo);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error.message);
    }
  };

  return (
    <div className="signup">
      <h1>Sign in</h1>

      <form onSubmit={handleSubmitSignUp} ref={signupForm}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" placeholder="Name" />

        <label htmlFor="email">Email id:</label>
        <input type="email" name="email" id="email" placeholder="Email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password" required />

        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
}

export default Signup;
