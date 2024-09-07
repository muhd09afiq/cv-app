import { useState } from "react";

export default function PersonalDetails() {
  return <InputFullName />;
}

function InputFullName() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label>
      Full Name <input value={text} onChange={handleChange} />
    </label>
  );
}
