const helper = {
  objectMappingContactList(array) {
    const obj = {};
    array.forEach((element) => {
      obj[`${element.id}`] = element;
    });
    return obj;
  },
};

export default helper;
