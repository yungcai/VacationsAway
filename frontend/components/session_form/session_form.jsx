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
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome to VacationsAway!
          <br/>
            {this.renderErrors()}
          <div>
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
            <label>Email:  
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <input type="submit" value={this.props.formType} />
          </div>
        </form>
        {
          this.props.formType == 'login' ? (
            <form>
              <button onClick={this.demo}>DEMO LOGIN</button>
            </form>
          ) : null
        }
      </div>
    );
  }
}

export default withRouter(SessionForm);