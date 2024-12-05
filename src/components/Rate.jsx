import { memo } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';

const Rate = ({ rating, totalRatings }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starIndex = index + 1;
    const isFilled = starIndex <= rating;
    return (
      <Icon
        key={index}
        icon={isFilled ? 'mingcute:star-fill' : 'flowbite:star-outline'}
        width="24"
        height="24"
        className="text-orange-500"
      />
    );
  });

  return (
    <div className="flex items-center">
      <div className="flex">{stars}</div>
      <span className="ml-2 text-sm text-gray-600">({totalRatings})</span>
    </div>
  );
};

Rate.propTypes = {
  rating: PropTypes.number.isRequired,
  totalRatings: PropTypes.number.isRequired,
};

export default memo(Rate);
