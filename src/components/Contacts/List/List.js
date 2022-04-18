import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const inputOnChange = (e) => {
    return setFilterText(e.target.value);
  };

  //propsla gelen contacts state'ini filtreleme =  gelen her bir item objesinin key'inde , inputa girilen keyword varsa listelensin.
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase());
    });
  });

  return (
    <>
      <input
        placeholder="Find Fullname or Number"
        value={filterText}
        onChange={inputOnChange}
      ></input>
      <ul className="ul-list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span></li>
        ))}
      </ul>
      <p>Total Contacts({filtered.length})</p>
    </>
  );
}

export default List;
