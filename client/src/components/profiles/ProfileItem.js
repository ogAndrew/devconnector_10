import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import spinner from '../common/Spinner';
import { getProfiles } from '../../actions/profileActions';

class Profiles extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default connect(null, {getProfiles})(Profiles);