import { useEffect, useState } from "react";

function Form({ contacts, setContacts }) {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //Form submit olduğunda form object'ini , props ile gelen contacts state' ine ekle. Eğer fullname yada phone_number inputu boş gelirse ekleme işlemi gerçekleşmesin.
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    setContacts([...contacts, form]);
  };

  // contacts değiştiğinde (form object'i eklendiğinde) inputların içini temizle.
  useEffect(() => {
    setForm({ fullname: "", phone_number: "" });
  }, [contacts]);

  return (
    <form onSubmit={onSubmit}>
      <div className="form">
        <input
          name="fullname"
          value={form.fullname}
          onChange={onChangeInput}
          placeholder="Fullname"
        ></input>
      </div>
      <div>
        <input
          name="phone_number"
          value={form.phone_number}
          onChange={onChangeInput}
          placeholder="Phone Number"
        ></input>
      </div>
      <div className="btn">
        <button>Add Contact</button>
      </div>
    </form>
  );
}

export default Form;
