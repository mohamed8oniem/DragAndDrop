import { Icon } from '@iconify/react/dist/iconify.js';
import { Navbar, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-secondary font-semibold' : 'text-gray-700';

  return (
    <Navbar className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center ">
          <Icon icon="emojione:shopping-bags" width="42" height="42" />
          <Typography
            variant="h5"
            className="cursor-pointer text-secondary font-semibold ml-3 "
          >
            Drag & Drop
          </Typography>
        </NavLink>

        <div className="hidden lg:block">
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/problemSolving" end className={navLinkClass}>
                Problem Solving
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
