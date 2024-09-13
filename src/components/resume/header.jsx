import { useState } from "react";

export default function Header() {
  const [data, setData] = useState(() => {
    const savedData = sessionStorage.getItem("PersonalData");
    return savedData ? JSON.parse(savedData) : {};
  });

  const fullName = data[0];
  const phoneNumber = data[1];
  const email = data[2];
  const address = data[3];
  const currentPosition = data[4];

  function handleUpdate() {
    const newData = sessionStorage.getItem("PersonalData");
    setData(JSON.parse(newData));
  }

  return (
    <>
      <button onClick={handleUpdate}>Update</button>
      <p>{fullName}</p>
      <p>{phoneNumber}</p>
      <p>{email}</p>
      <p>{address}</p>
      <p>{currentPosition}</p>
    </>
  );
}
