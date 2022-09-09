import api from "./api";

const contactService = {
  fetchContact() {
    return api.get("/users");
  },
};

export default contactService;
