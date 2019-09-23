import React from 'react';
import '../../style/user_index.scss'

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users
    };
  }

  render() {
    // debugger
    return (
      <div className="user-idx-container">
        <h2>Users with registration date/time:</h2>

        {this.props.users.map(user => 
          
          <div key={user._id}>
          <br/>
            <span>{user.handle}</span> - {new Date(user.date).toString()}
          </div>
        )}

      </div>
    )
  }

}

export default UserIndex;
