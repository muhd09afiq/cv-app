import { useState } from "react";
import EducationDetails from "./education";
import PersonalDetails from "./personal";
import ExperienceDetails from "./work-exp";

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
