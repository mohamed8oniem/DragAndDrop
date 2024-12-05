import { Typography } from '@material-tailwind/react';

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <Typography variant="h1" color="red" className="mb-4">
        404
      </Typography>
      <Typography variant="h5" color="blue-gray">
        Page Not Found
      </Typography>
    </div>
  );
};

export default NotFound;
