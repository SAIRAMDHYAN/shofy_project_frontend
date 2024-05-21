// // AuthContext.js (or any other appropriate context/provider)
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { jwtDecode } from 'jwt-decode';


// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       const decodedUser = decodedToken.user; // Assuming user information is stored in the 'user' field of the token payload
//       setUser(decodedUser);
//     }
//   }, []);

//   const login = (token) => {
//     localStorage.setItem('token', token);
//     const decodedToken = jwtDecode(token);
//     const decodedUser = decodedToken.user;
//     setUser(decodedUser);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

