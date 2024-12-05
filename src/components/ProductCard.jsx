/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Card, CardBody, Spinner, Typography } from '@material-tailwind/react';
import { useState } from 'react';

const ProductCard = ({
  product,
  index,
  onDragStart,
  onDragOver,
  onDrop,
  isDragging,
  handleClick,
}) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => setLoading(false);
  return (
    <div
      className="cursor-pointer"
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDrop={onDrop}
      onClick={() => handleClick(product)}
      style={{
        opacity: isDragging ? 0.5 : 1,
        // cursor: 'move',
      }}
    >
      <Card className="bg-blue-gray-50 min-h-full">
        <CardBody>
          {loading && (
            <div className=" flex items-center justify-center w-full h-80 mb-5">
              <Spinner className="h-8 w-8" color="amber" />
            </div>
          )}
          <img
            src={product?.image}
            alt={product?.title}
            className={`${loading ? 'hidden' : 'block'} w-full h-80 mb-5`}
            onLoad={handleLoad}
          />
          <div className="flex ">
            <Typography
              variant="h6"
              className="line-clamp-2 overflow-hidden text-ellipsis basis-2/3"
            >
              {product?.title}
            </Typography>
            <Typography className="basis-1/3 text-end font-bold text-secondary text-xl">
              {product?.price} $
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.object,
};
