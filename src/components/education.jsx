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
      label: "School Name: ",
      value: schoolName,
      onChange: handleSchoolName,
    },
    {
      label: "Course Name: ",
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
    if (sessionStorage.getItem("EducationData")) {
      const educationData = JSON.parse(sessionStorage.getItem("EducationData"));
      setSchoolName(educationData[0]);
      setCourseName(educationData[1]);
      setGraduationDate(educationData[2]);
    }
  });

  const formAction = function (e) {
    e.preventDefault();
    const educationData = {};
    details.forEach((item, index) => {
      educationData[index] = item.value;
    });
    sessionStorage.setItem("EducationData", JSON.stringify(educationData));
  };

  return (
    <>
      <h3>Education Details</h3>
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
