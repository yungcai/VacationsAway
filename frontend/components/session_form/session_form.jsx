import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  demo(e){
    e.preventDefault();
    const user = Object.assign({},
      {username:'demoguest1', email:'demoguest@demoguest', password:'demoguest'}
    );
    this.props.processForm(user).then(this.props.closeModal)
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {

    return (
      <div className='form-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='welcome'>Welcome to VacationsAway!</div>
          <br/>
            {this.renderErrors()}
          <div >
            <br/>
            <div className='form-username'>
            <label>Username:
              <input className='username' type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label></div>
            <br/>
            <div className='form-email'>
            <label>Email:  
              <input className='email' type="text"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </label></div>
            <br/>
            <div className='form-password'>
            <label>Password:
              <input className='password'type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label></div>
            <br/>
            <input className='form-submit' type="submit" value={this.props.formType} />
          </div>
        </form>
        {
          this.props.formType == 'LOG IN' ? (
            <form>
              <button className='demo-btn' onClick={this.demo}>DEMO LOGIN</button>
            </form>
          ) : null
        }
      </div>
    );
  }
}

export default withRouter(SessionForm);