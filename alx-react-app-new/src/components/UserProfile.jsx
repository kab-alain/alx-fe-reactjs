import React from 'react';

function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <h2 style={{ color: 'blue', marginBottom: '5px' }}>{props.name}</h2>

      <p style={{ margin: '5px 0' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>

      <p style={{ fontStyle: 'italic', marginTop: '5px' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;
