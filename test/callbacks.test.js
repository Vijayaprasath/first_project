const { getStudentId, studentDetails } = require("../src/callbacks");

test("checks for the student id present in the students array", () => {
  getStudentId("123").then((data) => {
    expect(data).toEqual({ id: "123", name: "Vijay" });
  });
});
test("checks for the student id present in the students array", () => {
  getStudentId("456").then((data) => {
    expect(data).toEqual({ id: "456", name: "vikkram" });
  });
});
test("checks for the student id present in the students array", () => {
  getStudentId("789").then((data) => {
    expect(data).toEqual({ id: "789", name: "vicky" });
  });
});
it("checks for the invalid id", () => {
  getStudentId("234").catch((error) => {
    expect(error).toBe("Invalid id");
  });
});
it("checks for the invalid id", () => {
  getStudentId("56").catch((error) => {
    expect(error).toBe("Invalid id");
  });
});
it("checks for the invalid id", () => {
  getStudentId("").catch((error) => {
    expect(error).toBe("Invalid id");
  });
});
it("checks for the invalid id", () => {
  getStudentId().catch((error) => {
    expect(error).toBe("Invalid id");
  });
});
it("checks for the invalid id", () => {
  getStudentId(123).catch((error) => {
    expect(error).toBe("Invalid id");
  });
});
it("checks for id and fetches the data", () => {
  studentDetails("456", getStudentId).then((data) => {
    expect(data).toEqual({ id: "456", name: "vikkram" });
  });
});
test("checks for id and fetches the data", () => {
  studentDetails("123", getStudentId).then((data) => {
    expect(data).toEqual({ id: "123", name: "Vijay" });
  });
});
it("checks for id and fetches the data", () => {
  studentDetails("789", getStudentId).then((data) => {
    expect(data).toEqual({ id: "789", name: "vicky" });
  });
});
it("checks for id and fetches the data", () => {
  studentDetails("789", getStudentId).then((data) => {
    expect(data).toEqual({ id: "789", name: "vicky" });
  });
});
test("Checks with the invalid id", async () => {
  expect(await studentDetails("", getStudentId)).toBe("Invalid id");
});
test("Checks with the invalid id", async () => {
  expect(await studentDetails(234, getStudentId)).toBe("invalid parameters");
});
test("Checks with the invalid id", async () => {
  expect(await studentDetails("id", "getStudentId")).toBe("invalid parameters");
});
test("Checks with the invalid id id", async () => {
  expect(await studentDetails("id", getStudentId)).toBe("Invalid id");
});
test("Checks with the invalid id", async () => {
  expect(await studentDetails(123, getStudentId)).toBe("invalid parameters");
});
test("Checks with the invalid id", async () => {
  expect(await studentDetails(23, getStudentId)).toBe("invalid parameters");
});
test("Checks with the invalid id", async () => {
  expect(await studentDetails()).toBe("invalid parameters");
});
test("Checks with the invalid id", async () => {
  expect(await studentDetails(getStudentId, "123")).toBe("invalid parameters");
});
