import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from './nav-header';
import { logout } from '../redux/actions';

const propTypes = {
  dispatch: PropTypes.func,
};


class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    this.props.logout()
  }

  render() {
    return (
      <Navbar
        onLogoutClick={this.handleLogoutClick}
        isAuthenticated={this.props.isAuthenticated}
        profile={this.props.profile}
      />
    );
  }
}

NavbarContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const { auth } = state;
  const { isAuthenticated, profile } = auth;
  return {
    isAuthenticated,
    profile,
  };
}

export default connect(mapStateToProps, {
  logout,
})(NavbarContainer);
