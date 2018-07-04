import React from 'react';
const AllRider = ({rider}) =>
  <tr className="table table-bordered">
      <td>{rider.id}</td>
      <td>{rider.first_name}</td>
      <td>{rider.last_name}</td>
      <td>{rider.city}</td>
      
      </tr>

export default AllRider;
