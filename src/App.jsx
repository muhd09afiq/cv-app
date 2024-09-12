import "./App.css";
import EducationDetails from "./components/form/education";
import PersonalDetails from "./components/form/personal";
import ExperienceDetails from "./components/form/work-exp";

function App() {
  return (
    <>
      <PersonalDetails />
      <EducationDetails />
      <ExperienceDetails />
    </>
  );
}

export default App;
