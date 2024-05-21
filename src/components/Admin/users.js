import React, { useState, useEffect } from 'react';
import AdminMenue from './adminMenue';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3002/users');
        setUsers(response.data);
        setLoading(false); // Once data is fetched, set loading to false
      } catch (error) {
        console.error('Error in fetching users', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 align-self-start">
            <AdminMenue />
          </div>
          <div className="col-md-9 text-center">
            <h1>Users</h1>

            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <div id="products-grid" className='row gx-3'>
                {users.map((user) => (
                  <div className="col-md my-2" key={user.id}>
                    <div className="card" >
                      <img
                        src={`http://localhost:3002/${user.image}`}
                        className="card-img-top"
                        alt={user.title}
                        height="150px"
                        width="200px"
                      />
                      <div className="card-body">
                        <h4>{user.name}</h4>
                        <h5>{user.email}</h5>
                        <h6>{user.userType}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
