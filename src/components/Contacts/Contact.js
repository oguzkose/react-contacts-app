import { useEffect, useState } from "react";
import Form from "./Form/Form";
import List from "./List/List";
import "./styles.css"

function Contact() {
  const [contacts, setContacts] = useState([
    { fullname: "David Gilmour", phone_number: "+44 5801234567" },
    { fullname: "Roger Waters", phone_number: "+44 5804567890" },
    { fullname: "Syd Barrett", phone_number: "+44 5805678901" },
    { fullname: "Nick Mason", phone_number: "+44 5806789012" },
    { fullname: "Rick Write", phone_number: "+44 5807890123" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contact App</h1>
      <Form contacts={contacts} setContacts={setContacts}></Form>
      <List contacts={contacts} />
    </div>
  );
}

export default Contact;
