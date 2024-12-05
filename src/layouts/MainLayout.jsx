import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';
import AppFooter from '../components/AppFooter';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto py-8">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default MainLayout;
