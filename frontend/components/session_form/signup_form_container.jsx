import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'SIGN UP'
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        LOGINNN
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(SessionForm);
