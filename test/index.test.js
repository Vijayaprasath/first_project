const {
  eligibleForOrdering,
  productCheck,
  walletAmount,
  orderingTheProduct,
  orderProcess,
  products,
} = require("../src/index");

test("check for the product(Mobiles)", () => {
  productCheck("Mobile").then((data) => {
    expect(data).toEqual({ productName: "Mobile", price: 28000 });
  });
});
test("check for the product(Mobiles)", () => {
  productCheck("Mobile").catch((error) => {
    expect(error).toBe("Product not available");
  });
});
test("checks for the product(Airpod)", () => {
  productCheck("Airpod").then((data) => {
    expect(data).toEqual({ productName: "Airpod", price: 25000 });
  });
});
test("checks for the product(Airpod)", () => {
  productCheck("airpod").catch((error) => {
    expect(error).toBe("Product not available");
  });
});
test("checks for the product(Laptop)", () => {
  productCheck("Laptop").then((data) => {
    expect(data).toEqual({ productName: "Laptop", price: 100000 });
  });
});
test("checks for the product(Laptop)", () => {
  productCheck("laptop").catch((error) => {
    expect(error).toBe("Product not available");
  });
});

it("checks for the product(TV)", () => {
  productCheck("Television").catch((error) => {
    expect(error).toBe("Product not available");
  });
});
test("checks for the product()", () => {
  productCheck("").catch((error) => {
    expect(error).toBe("Product not available");
  });
});
test("checks for the product()", () => {
  productCheck(123).catch((error) => {
    expect(error).toBe("Product not available");
  });
});
test("checks for the product()", () => {
  productCheck({}).catch((error) => {
    expect(error).toBe("Product not available");
  });
});
test("checks for the product()", () => {
  productCheck([]).catch((error) => {
    expect(error).toBe("Product not available");
  });
});

test("checks the price with the walletAmount for availability of amount", () => {
  eligibleForOrdering(
    { productName: "Mobile", price: 28000 },
    walletAmount
  ).then((data) => {
    expect(data).toBe("Mobile");
  });
});
test("checks the price with the walletAmount for availability of amount", () => {
  eligibleForOrdering(
    { productName: "Television", price: 20000 },
    walletAmount
  ).catch((error) => {
    expect(error).toBe("Insufficient Amount in the wallet");
  });
});

test("checks the price with the walletAmount for availability of amount", () => {
  eligibleForOrdering({ productName: "pen", price: 200 }, walletAmount).then(
    (data) => {
      expect(data).toBe("pen");
    }
  );
});
test("checks the price with the walletAmount for availability of amount", () => {
  eligibleForOrdering(
    { productName: "Laptop", price: 100000 },
    walletAmount
  ).catch((error) => {
    expect(error).toBe("Insufficient Amount in the wallet");
  });
});
test("checks the price with the walletAmount for availability of amount", () => {
  eligibleForOrdering(
    { productName: "Airpod", price: 25000 },
    walletAmount
  ).then((data) => {
    expect(data).toBe("Airpod");
  });
});
test("checks the price with the walletAmount for availability of amount", () => {
  eligibleForOrdering({ productName: "MT", price: 250000 }, walletAmount).catch(
    (error) => {
      expect(error).toBe("Insufficient Amount in the wallet");
    }
  );
});

test("Display of the order message", () => {
  orderingTheProduct("Mobile").then((data) => {
    expect(data).toBe("Mobile ordered successfully");
  });
});
test("Display of the order message", () => {
  orderingTheProduct("Laptop").then((data) => {
    expect(data).toEqual("Laptop ordered successfully");
  });
});
test("Display of the order message", () => {
  orderingTheProduct("Airpod").then((data) => {
    expect(data).toEqual("Airpod ordered successfully");
  });
});

test("checks the completion of the orderprocess", async() => {
    expect(await orderProcess("Mobile")).toBe("Mobile ordered successfully");
  });

test("checks the completion of the orderprocess", async() => {
    expect( await orderProcess("Laptop")).toBe("Insufficient Amount in the wallet");
  });

test("checks the completion of the orderprocess", async() => {
    expect( await orderProcess("Airpod")).toBe("Airpod ordered successfully");
  });
test("checks the completion of the orderprocess", async() => {
    expect( await orderProcess("mobile")).toBe("Product not available");
  });

test("checks the completion of the orderprocess", async() => {
    expect(await orderProcess("Pen")).toBe("Product not available");
  });
test("checks the completion of the orderprocess", async() => {
    expect(await orderProcess()).toBe("invalid parameters");
  });

