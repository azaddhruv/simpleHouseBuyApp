const findMaxPrice = (data) => {
  let max = 0;
  for (let d of data) {
    if (d.price > max) max = d.price;
  }
  return max;
};

export default findMaxPrice;
