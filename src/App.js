// import logo from "./logo.svg";
import "./App.css";
import ChatUI from "./components/chatUI/chatUI.component";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Demo from "./components/chatPopup/chatPopup.component";
import SimpleForm from "./components/chatBot/SimpleForm";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <SimpleForm />
    </div>
  );
}

export default App;
