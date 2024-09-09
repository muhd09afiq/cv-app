import { useState } from "react";

export default function PersonalDetails() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleFullName = (e) => setFullName(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

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
  ];

  return (
    <>
      <form action="">
        {details.map((item, index) => (
          <label key={index}>
            {item.label}
            <input value={item.value} onChange={item.onChange} />
          </label>
        ))}
      </form>
    </>
  );
}
