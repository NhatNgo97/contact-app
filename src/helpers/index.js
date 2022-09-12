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
  mappingContactModel(contact) {
    return {
      id: contact.id,
      name: contact.name,
      username: contact.username,
      email: contact.email,
      address: Object.values(contact.address).slice(0, 4).join(", "),
      geo: {
        lat: contact.address.geo.lat,
        lng: contact.address.geo.lng,
      },
      phone: helper.formatPhoneNumber(contact.phone.slice(0, 14)),
      website: contact.website,
      workplace: contact.company.name,
    };
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
  //to avoid tailwind to remove unused css
  tailwindCssPurgeSafeList: {
    text: "text-blue-500 text-white text-black",
    border: "border-blue-500 border-white",
    bg: "bg-[#f5f5f5] bg-[#dae0e6] bg-black bg-[#1a1a1b] bg-[#48484c] bg-white",
  },
};

export default helper;
