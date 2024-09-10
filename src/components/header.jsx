import { useState, useEffect } from "react";

export default function Header() {
  const [data, setData] = useState(() => {
    const savedData = sessionStorage.getItem("PersonalData");
    return savedData ? JSON.parse(savedData) : {};
  });

  const fullName = data[0];
  const phoneNumber = data[1];

  function handleUpdate() {
    const newData = sessionStorage.getItem("PersonalData");
    setData(JSON.parse(newData));
  }

  return (
    <>
      <p>{fullName}</p>
      <p>{phoneNumber}</p>
      <button onClick={handleUpdate}>Update</button>
    </>
  );
}
