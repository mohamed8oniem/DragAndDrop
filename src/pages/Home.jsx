import { Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import ProductsList from '../components/ProductsList';
import useLocalStorage from '../hooks/useLocalStorage';
import { Icon } from '@iconify/react/dist/iconify.js';
import BaseModal from '../components/BaseModal';
import useModal from '../hooks/useModal';
import Rate from '../components/Rate';

const Home = () => {
  // ** States **//
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const [product, setProduct] = useState();

  // ** Hooks **//
  const [savedOrder, setSavedOrder] = useLocalStorage('productOrder', []);
  const { isOpen, closeModal, openModal } = useModal();

  // ** Functions **//
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get('products');
      const fetchedProducts = res.data;

      if (savedOrder?.length > 0) {
        // Get the Fetched Ordered Data from Ordered ids
        const orderedProducts = savedOrder
          .map((id) => fetchedProducts.find((product) => product.id === id))
          // Removed undefined from the array
          .filter(Boolean);

        // For any new Products ids thats not includes in saved Ordered ids
        const newProducts = fetchedProducts.filter(
          (product) => !savedOrder.includes(product.id)
        );
        setProducts([...orderedProducts, ...newProducts]);
      } else {
        setProducts(fetchedProducts);
      }
    } catch (err) {
      console.log(err);
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  // When Dragging start
  const handleDragStart = (_, index) => {
    //Set The Index of dragging item into state
    setDraggedItemIndex(index);
  };

  // While Dragging
  const handleDragOver = (e, index) => {
    // Index = new drag destination index
    e.preventDefault();
    // If we Drag item to another place index
    if (index !== draggedItemIndex) {
      setProducts((prevProducts) => {
        //Set The Dragged Item into constant
        const draggedItem = prevProducts[draggedItemIndex];
        // Remove the DraggedItem from products
        prevProducts.splice(draggedItemIndex, 1);
        // Insert the Dragged item at the destination index
        prevProducts.splice(index, 0, draggedItem);
        // Finally set the dragged item index to the new destination index
        setDraggedItemIndex(index);
        return prevProducts;
      });
    }
  };

  // When Dragging is finished
  // Save the new dragging items ids orders to localstorage
  const handleDrop = (e) => {
    e.preventDefault();
    setSavedOrder(products.map((product) => product.id));
    setDraggedItemIndex(null);
  };

  const handleClick = (productInfo) => {
    setProduct(productInfo);
    openModal();
  };

  //** Hooks **//
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }
  return (
    <div className="container mx-auto">
      <Typography
        variant="h4"
        className="mb-3 text-primary flex content-center items-center"
      >
        <Icon icon="icon-park:shop" width="20" height="20" className="mr-2" />{' '}
        Products List
      </Typography>

      <ProductsList
        handleClick={handleClick}
        products={products}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        draggedItemIndex={draggedItemIndex}
      />
      {product && (
        <BaseModal
          size="lg"
          title="Product Info"
          open={isOpen}
          closeModal={closeModal}
          toggleModal={closeModal}
        >
          <div className="flex">
            <img src={product?.image} className="w-[20vw] h-[25vh] mr-3"></img>
            <div className="flex flex-col">
              <Typography variant="h5">
                {product?.title}
                <span className="text-sm">({product?.category})</span>
              </Typography>
              <Rate
                rating={product?.rating?.rate}
                totalRatings={product?.rating?.count}
              />
              <Typography variant="h6">Description :</Typography>
              <Typography variant="small">{product?.description}</Typography>
              <Typography variant="h3" className="text-secondary">
                {product?.price} $
              </Typography>
            </div>
          </div>
        </BaseModal>
      )}
    </div>
  );
};

export default Home;
