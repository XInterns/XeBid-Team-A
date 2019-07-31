import React from 'react';
import MaterialTable from 'material-table';
import {connect} from 'react-redux';

import {signUp} from '../../Actions/authActions';

const MaterialTableDemo =(props)=> {
  const [state, setState] = React.useState({
    columns: [
      { title: 'First Name', field: 'firstName' },
      { title: 'Last Name', field: 'lastName' },
      { title: 'Email', field: 'email'},
      { title: 'Contact', field: 'contact'},
      {
        title: 'Role',
        field: 'role',
        lookup: { 0: 'Admin', 2: 'Event Manager',3:'Team Owner',4:'Participant',5:'Audience' },
      },
    ],
    data: [
      { firstName: 'Rishabh', 
        lastName: 'Mishra', 
        email: 'rishabhismishra@gmail.com', 
        contact: '8860323649', 
        role:0 },
      {
        firstName: 'Ameya',
        lastName: 'Mishra',
        email: 'rishabh.mishra@bennett.edu.in',
        contact: '8860323649',
        role:0
      },
    ],
  });

  return (
    <MaterialTable
      title="USERS TABLE"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              props.signUp({...newData,password:'Pass@1028'});
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(null,mapDispatchToProps)(MaterialTableDemo)