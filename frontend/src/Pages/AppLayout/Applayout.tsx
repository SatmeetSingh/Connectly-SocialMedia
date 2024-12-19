import React, { useEffect } from 'react';
import Home from '../HomePage/Home';
import NavBar from '../../Components/Navbar/Navbar';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

export default function () {
  return (
    <div className="h-[100%] min-[750px]:flex min-[750px]:gap-3">
      <NavBar />
      <Outlet />
    </div>
  );
}
