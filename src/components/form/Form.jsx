import EducationDetails from "./education";
import PersonalDetails from "./personal";
import ExperienceDetails from "./work-exp";

export default function Form() {
  return (
    <>
      <PersonalDetails />
      <EducationDetails />
      <ExperienceDetails />
    </>
  );
}
