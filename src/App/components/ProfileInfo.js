import React from 'react';

export default class ProfileInfo extends React.Component {
  renderFriendInfo = () => {
    const {age, gender} = this.props;
    const {subheader} = style;
    return (
      <div>
        <h2 style={subheader}>{age}</h2>
        <h2 style={subheader}>{gender}</h2>
      </div>
    )
  }

  renderShelterInfo = () => {
    const {email, address1, address2, city, state, zip} = this.props.contact;
    const {subheader} = style;
    return (
      <address>
        <h2 style={subheader}>{email}</h2>
        <ul>
          <li>{address1}</li>
          <li>{address2}</li>
          <li>{city}</li>
          <li>{state}</li>
          <li>{zip}</li>
        </ul>
      </address>
    )
  }


  render(){
    const {friend, shelter, title, description} = this.props;
    return (
      <div style={style.ProfileInfo}>
        <h1 style={style.title}>{title}</h1>
        { friend && this.renderFriendInfo()}
        { shelter && this.renderShelterInfo()}
        <p>{description}</p>
      </div>
    )
  }
}

const style = {
  ProfileInfo: {
    width: '90%'
  },
  title: {
    margin: '12px 0'
  },
  subheader: {
    fontSize: "1em"
  }
}