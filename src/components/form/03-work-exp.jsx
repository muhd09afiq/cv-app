import { useState } from "react";

export default function ExperienceDetails({ isActive, showActiveHandler }) {
  //(company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [jobTask, setJobTask] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleCompanyName = (e) => setCompanyName(e.target.value);
  const handlePositionTitle = (e) => setPositionTitle(e.target.value);
  const handleJobTask = (e) => setJobTask(e.target.value);
  const handleStartDate = (e) => setStartDate(e.target.value);
  const handleEndDate = (e) => setEndDate(e.target.value);

  const details = [
    {
      label: "Company Name: ",
      value: companyName,
      onChange: handleCompanyName,
    },
    {
      label: "Position Name: ",
      value: positionTitle,
      onChange: handlePositionTitle,
    },
    {
      label: "Job Task: ",
      value: jobTask,
      onChange: handleJobTask,
    },
    {
      label: "Start Date: ",
      value: startDate,
      onChange: handleStartDate,
    },
    {
      label: "End Date: ",
      value: endDate,
      onChange: handleEndDate,
    },
  ];

  //check if there already saved data and load it
  document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("ExperienceData")) {
      const experienceData = JSON.parse(
        sessionStorage.getItem("ExperienceData")
      );
      setCompanyName(experienceData[0]);
      setPositionTitle(experienceData[1]);
      setJobTask(experienceData[2]);
      setStartDate(experienceData[3]);
      setEndDate(experienceData[4]);
    } else {
      //add blank object if no data
      const experienceData = {};
      details.forEach((item, index) => {
        experienceData[index] = "";
      });
      sessionStorage.setItem("ExperienceData", JSON.stringify(experienceData));
    }
  });

  const formAction = function (e) {
    e.preventDefault();
    const experienceData = {};
    details.forEach((item, index) => {
      experienceData[index] = item.value;
    });
    sessionStorage.setItem("ExperienceData", JSON.stringify(experienceData));
  };

  return (
    <>
      <h3>Working Experiences</h3>
      {isActive ? (
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
      ) : (
        <button onClick={showActiveHandler}>Show</button>
      )}
    </>
  );
}
