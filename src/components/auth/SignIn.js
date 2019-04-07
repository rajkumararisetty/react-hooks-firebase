import React, {useState} from 'react';

const SignIn = () => {

  const [SignInForm, setLogin] = useState({email: '', password: ''});

  const handleChange = (e) => {
    const {id, value} = e.target;
    setLogin({...SignInForm, [id]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(SignInForm);
  };

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3"> Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} value={SignInForm.email} />
        </div>
        <div className="input-field">
          <label htmlFor="password">password</label>
          <input type="password" id="password" onChange={handleChange} value={SignInForm.password} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
