export const generateMetadata = ({ params }) => {
  return {
    title: {
      absolute: `Product ${params.productId}`,
    },
  };
};
const ProductDetails = ({ params }) => {
  return <div>Product {params.productId}</div>;
};

export default ProductDetails;
