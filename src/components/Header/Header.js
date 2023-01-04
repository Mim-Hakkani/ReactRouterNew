import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
      let activeStyle = {
    textDecoration: "underline",
    backgroundColor:"green"
    
  };

//   let activeClassName2 = {
//     color:'#000',
//     backgroundColor:'red'
//   };

    return (
        <div>
               <nav>
      <ul style={{
        listStyle:'none'
      }}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "activeClassName2" : undefined
            }
          >
            About
          </NavLink>
        </li>

                <li>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? "activeClassName2" : undefined
            }
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/friends">
            {({ isActive }) => (
              <span
                className={
                  isActive ? "activeClassName5" : undefined
                }
              >
                Friends
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
        </div>
    );
};

export default Header;