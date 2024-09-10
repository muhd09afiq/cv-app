import { useState } from "react";

export default function PersonalDetails() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [currentPosition, setCurrentPosition] = useState("");

  const handleFullName = (e) => setFullName(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleCurrentPosition = (e) => setCurrentPosition(e.target.value);

  const details = [
    {
      label: "Full Name: ",
      value: fullName,
      onChange: handleFullName,
    },
    {
      label: "Phone Number: ",
      value: phoneNumber,
      onChange: handlePhoneNumber,
    },
    {
      label: "Email: ",
      value: email,
      onChange: handleEmail,
    },
    {
      label: "Address: ",
      value: address,
      onChange: handleAddress,
    },
    {
      label: "Current Position: ",
      value: currentPosition,
      onChange: handleCurrentPosition,
    },
  ];

  const formAction = function (e) {
    e.preventDefault();
    const personalData = {};
    details.forEach((item, index) => {
      personalData[index] = item.value;
    });
    sessionStorage.setItem("PersonalData", JSON.stringify(personalData));
  };

  return (
    <>
      <form action="" onSubmit={formAction}>
        {details.map((item, index) => (
          <label key={index}>
            {item.label}
            <input value={item.value} onChange={item.onChange} />
          </label>
        ))}
        <button type="submit">Save</button>
      </form>
    </>
  );
}
