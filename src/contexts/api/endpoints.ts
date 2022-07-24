import ProductData from 'constants/ProductData';

const getProductDataAPI = async () => {
  /** This is where the api GET call would be made to the backend via axios
   * The async await here is for the purpose of mocking an endpoint call
   */
  const response = await ProductData;

  return response;
};

export {getProductDataAPI};
