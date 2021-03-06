const sortSkus = productData =>
    (productData &&
        Object.keys(productData).sort(
            (x, y) => productData[x].timeAdded - productData[y].timeAdded
        )) ||
    [];

export default sortSkus;
