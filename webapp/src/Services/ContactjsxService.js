import axios from "axios";

const CONTACT_API_BASE_URL = "http://localhost:8082/contactus"

class ContactService {

    getContact(){
        return axios.get(CONTACT_API_BASE_URL)
    }


    createContact(contact) {
        return axios.post(CONTACT_API_BASE_URL, contact);

    }
}

export default new ContactService;