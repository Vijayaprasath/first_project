let students = [
  { id: "123", name: "Vijay" },
  { id: "456", name: "vikkram" },
  { id: "789", name: "vicky" },
];

let getStudentId = (givenId) => {
  return new Promise((resolve, reject) => {
    for (const student in students) {
      if (students[student].id === givenId) {
        resolve(students[student]);
      }
    }
    reject("Invalid id");
  });
}

async function studentDetails(id, callback) {
  if(typeof (id) !== 'string' || typeof (callback) !== "function") {
    return ("invalid parameters");
  }
  
  console.log(id);
  try {
    // console.log(id)
    // console.log(callback)
    let studentData = await callback(id);
    console.log(callback(id))
    return studentData;
  } catch (error) {
    console.error(error)
    return error;
  }
}
studentDetails("123", 'getStudentId')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

module.exports = {
  getStudentId,
  studentDetails,
  students,
};
