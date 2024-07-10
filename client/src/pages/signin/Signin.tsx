import { useRef } from 'react';
import './signin.scss';

const Signin = () => {
  const loginForm = useRef(null);

  const handleSubmitLogin = (event) => {
    event.preventDefault();

    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    console.log(email, password);
  };

  return (
    <div className="signin">
      <h1>Sign in</h1>

      <form onSubmit={handleSubmitLogin} ref={loginForm}>
        <label htmlFor="email">Email id:</label>
        <input type="email" name="email" id="email" placeholder="Email" />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password" />

        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};

export default Signin;
