import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ProblemSolving from '../pages/ProblemSolving';

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'problemSolving', element: <ProblemSolving /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return routes;
};

export default AppRoutes;
