import { useState } from "react";
import EducationDetails from "./02-education";
import PersonalDetails from "./01-personal";
import ExperienceDetails from "./03-work-exp";

export default function Form() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <PersonalDetails
        isActive={activeIndex === 0}
        showActiveHandler={() => setActiveIndex(0)}
      />
      <EducationDetails />
      <ExperienceDetails />
    </>
  );
}
