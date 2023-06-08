const walletAmount = 30000;
const mobile = {
  productName: "Mobile",
  price: 28000,
};
const laptop = {
  productName: "Laptop",
  price: 100000,
};
const airpod = {
  productName: "Airpod",
  price: 25000,
};
const products = [mobile, laptop, airpod];

async function orderProcess(product) {
  if(typeof (product) !== 'string') {
    return "invalid parameters";
  }
  try {
    const checkingForProduct = await productCheck(product);
    const checkindForAvilabilityOfWalletAmount = await eligibleForOrdering(
      checkingForProduct,
      walletAmount
    );
    const confirmationOfOrder = await orderingTheProduct(
      checkindForAvilabilityOfWalletAmount
    );
    return confirmationOfOrder;
  } catch (error) {
    return error;
  }
}

function productPurchase(productName) {
  return productCheck(productName)
    .then((productName) => eligibleForOrdering(productName, walletAmount))
    .then((productName) => orderingTheProduct(productName))
    .catch((error) => console.log(error));
}

const productCheck = (product) => {
  return new Promise((resolve, reject) => {
    for (const index in products) {
      if (products[index].productName === product) {
        resolve(products[index]);
      }
    }
    reject("Product not available");
  });
};

const eligibleForOrdering = (product, amount) => {
  return new Promise((resolve, reject) => {
    if (product.price <= amount) {
      resolve(product.productName);
    } else {
      reject("Insufficient Amount in the wallet");
    }
  });
};

let orderingTheProduct = (product) => {
  return new Promise((resolve, reject) => {
    resolve(product + " ordered successfully");
  });
};
productPurchase("Mobile")
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));

module.exports = {
  walletAmount,
  productCheck,
  eligibleForOrdering,
  orderingTheProduct,
  orderProcess,
  products,
};
