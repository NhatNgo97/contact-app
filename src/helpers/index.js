import ContactDetail from "../components/dependant/ContactDetail";

const helper = {
  objectMappingContactList(array) {
    const obj = {};
    array.forEach((element) => {
      obj[`${element.id}`] = element;
    });
    return obj;
  },
  formatPhoneNumber(phone) {
    //normalize string and remove all unnecessary characters
    phone = phone.replace(/[^\d]/g, "");

    //check if number length equals to 10
    if (phone.length == 10 || 11) {
      //reformat and return phone number
      return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }
    return phone;
  },
  theme: {
    light: {
      primaryColor: "blue-500",
      secondaryColor: "black",
      backgroundColor: "white",
      secondaryBackgroundColor: "[#f5f5f5]",
      pageBackgroundColor: "[#dae0e6]",
    },
    dark: {
      primaryColor: "white",
      secondaryColor: "white",
      backgroundColor: "[#1a1a1b]",
      secondaryBackgroundColor: "[#48484c]",
      pageBackgroundColor: "black",
    },
  },
};

export default helper;
