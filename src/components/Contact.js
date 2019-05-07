import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Consumer } from '../context';

class Contact extends Component {
  
  static propTypes = {
    contact: PropTypes.object.isRequired,
    
  }; 

  state = {
    showContactinfo: false
  };

  onDeleteClick = async (id, dispatch) => {
      try{
       await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({ type: 'ADD_CONTACT', payload: id});
    } catch (e) {
      dispatch({ type: 'ADD_CONTACT', payload: id});
    }
    };

  onShowClick = e => {
    
  };

  render() {
    const {id, name, email, phone} = this.props.contact;
    const {showContactinfo} = this.state;
    return (

      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className = 'card card-body mb-3'>
            <h4> {name} {''}
            <i 
              onClick={() => 
                this.setState({showContactinfo:
                !this.state.showContactinfo})
            }
                className='fas fa-sort down'
                style={{cursor: 'pointer'}}
                />
            <i  className='fas fa-times'
                style={{cursor: 'pointer', float: 'right', color: 'red'}}
                onClick={this.onDeleteClick.bind(this, id, dispatch)}
            />

              <Link to = {`contact/edit/${id}`}>
                <i 
                className = 'fas fa-pencil-alt'
                style={{
                  cursor: 'pointer',
                  float: 'right',
                  color: 'black',
                  margin: '1rem'
                }}
                >
                </i>
              </Link>

                </h4>
                {showContactinfo ? ( <ul className = 'list-group'>
                <li className = 'list-group-item'>{email}</li>
                <li className = 'list-group-item'>{phone}</li>
            </ul>) : null}
           
          </div>
          )
        }}
      </Consumer>

     
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  
};

export default Contact;
