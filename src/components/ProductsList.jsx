import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductsList = ({
  products,
  onDragStart,
  onDragOver,
  onDrop,
  draggedItemIndex,
  handleClick,
}) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          handleClick={() => handleClick(product)}
          key={product.id}
          product={product}
          index={index}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          isDragging={draggedItemIndex === index}
        />
      ))}
    </div>
  );
};

export default ProductsList;
ProductsList.propTypes = {
  products: PropTypes.array,
  onDragStart: PropTypes.func,
  handleClick: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  draggedItemIndex: PropTypes.number,
};
