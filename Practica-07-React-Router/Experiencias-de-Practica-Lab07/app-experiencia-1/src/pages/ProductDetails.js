import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  return <h3>Details of product {productId}</h3>;
};

export default ProductDetails;
