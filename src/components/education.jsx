import { useState } from "react";

export default function EducationDetails() {
  //school name, title of study and date of study)
  const [schoolName, setSchoolName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [graduationDate, setGraduationDate] = useState("");

  const handleSchoolName = (e) => setSchoolName(e.target.value);
  const handleCourseName = (e) => setCourseName(e.target.value);
  const handleGraduationDate = (e) => setGraduationDate(e.target.value);

  const details = [
    {
      label: "Full Name: ",
      value: schoolName,
      onChange: handleSchoolName,
    },
    {
      label: "Phone Number: ",
      value: courseName,
      onChange: handleCourseName,
    },
    {
      label: "GraduationDate: ",
      value: graduationDate,
      onChange: handleGraduationDate,
    },
  ];

  //check if there already saved data and load it
  document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("PersonalData")) {
      const personalData = JSON.parse(sessionStorage.getItem("PersonalData"));
      setSchoolName(personalData[0]);
      setCourseName(personalData[1]);
      setGraduationDate(personalData[2]);
    }
  });

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
      <h3>Personal Details</h3>
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
