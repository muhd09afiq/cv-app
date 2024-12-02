import "./components/styles/App.css";
import Form from "./components/form/00-Form";
import Header from "./components/resume/header";

function App() {
  return (
    <>
      <Form />
      <div className="resume">
        <div className="header">
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
