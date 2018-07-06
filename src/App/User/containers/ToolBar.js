import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import FontAwesome from 'App/components/FontAwesome';
import Button from 'App/components/Button';
import 'App/styles/ToolBar.css';


class ToolBar extends React.Component {

  addShelter = () => {
    this.props.history.push('/shelters/new');
  }

  addFriend = () => {
    this.props.history.push('/friends/new');
  }

  render(){
    let {shelter, history} = this.props;
    return (
      <div className="ToolBar">
        { !shelter &&
          <div className="toolbar-content">
            <div className="toolbar-button">
              <Button
                buttonStyle='circle-lg'
                color='green'
                handleClick={this.addShelter}
              >
                <FontAwesome
                  icon='plus'
                  size='4x'
                />
              </Button>
              <p>Add Shelter</p>
            </div>
          </div>
         }
         { shelter &&
           <div className="toolbar-content">
             <div className="toolbar-button">
               <Button
                 buttonStyle='circle-md'
                 handleClick={this.addFriend}
                >
                  <FontAwesome
                    icon='plus'
                    size='2x'
                  />
               </Button>
               <p>New Friend</p>
             </div>
             <div className="toolbar-button">
               <Button
                 buttonStyle='circle-lg'
                 handleClick={() => {history.push(`/shelters/${shelter._id}`)}}
                >
                  <FontAwesome
                    icon='home'
                    size='4x'
                  />
               </Button>
               <p>{shelter.name}</p>
             </div>
             <div className="toolbar-button">
               <Button
                 buttonStyle='circle-md'
                 handleClick={() => {}}
                >
                  <FontAwesome
                    icon='edit'
                    size='2x'
                  />
               </Button>
               <p>Edit</p>
             </div>
          </div>
         }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
    shelterAdmin: false
  }
}

export default withRouter(connect(mapStateToProps, null)(ToolBar));
