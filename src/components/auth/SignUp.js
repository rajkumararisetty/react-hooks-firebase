import React, {useState} from 'react';

const SignUp = () => {

  const [SignUpForm, setSignUp] = useState({firstName: '', lastName: '', email: '', password: ''});

  const handleChange = (e) => {
    const {id, value} = e.target;
    setSignUp({...SignUpForm, [id]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(SignUpForm);
  };

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3"> Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} value={SignUpForm.email} />
        </div>
        <div className="input-field">
          <label htmlFor="password">password</label>
          <input type="password" id="password" onChange={handleChange} value={SignUpForm.password} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleChange} value={SignUpForm.lastName} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleChange} value={SignUpForm.firstName} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
