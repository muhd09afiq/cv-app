import "./App.css";
import EducationDetails from "./components/education";
import Header from "./components/header";
import PersonalDetails from "./components/personal";
import ExperienceDetails from "./components/work-exp";

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
