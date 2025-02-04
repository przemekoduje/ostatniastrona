import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import usePreloadImages from "./hooks/usePreloadImages.jsx";
import Loader from "./components/Loader/Loader";
import Background from "./components/Background/Background";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home.jsx";
import BehindTheScenes from "./pages/BehindTheScenes/BehindTheScenes.jsx";
import BlackHole from "./pages/BlackHole/BlackHole.jsx";
import Faq from "./pages/Faq/Faq.jsx";
import LightHouse from "./pages/LightHouse/LightHouse.jsx";
import Mask from "./pages/Mask/Mask.jsx";
import NeedsPuzzles from "./pages/NeedsPuzzles/NeedsPuzzles.jsx";
import PhoneToFriend from "./pages/PhoneToFriend/PhoneToFriend.jsx";
import SecretKey from "./pages/SecretKey/SecretKey.jsx";
import UnfinishedTale from "./pages/UnfinishedTale/UnfinishedTale.jsx";
import Cookies from "./pages/Cookies/Cookies.jsx";
import "./styles/App.scss";

const imageUrls = [
  "/images/background01.png",
  "/images/background09.png",
  "/images/background02.png",
  "/images/background06.png",
  "/images/background07.png",
  "/images/background10.png",
  "/images/background05.png",
  "/images/background04.png",
  "/images/background08.png",
  "/images/background12.png",
  "/images/background11.png",
];

function App() {
  const { loaded, progress } = usePreloadImages(imageUrls);
  const [showLoader, setShowLoader] = useState(true);

  // Ukryj loader po pełnym załadowaniu
  useEffect(() => {
    if (loaded) {
      setTimeout(() => setShowLoader(false), 2000); // Zatrzymanie na 2 sekundy przed przejściem
    }
  }, [loaded]);

  return (
    <div className="App">
      <Router>
        {showLoader ? (
          <Loader progress={progress} />
        ) : (
          <>
          <Background /> 
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/black-hole" element={<BlackHole />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/secret-key" element={<SecretKey />} />
              <Route path="/unfinished-tale" element={<UnfinishedTale />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/lighthouse" element={<LightHouse />} />
              <Route path="/phone-to-friend" element={<PhoneToFriend />} />
              <Route path="/mask" element={<Mask />} />
              <Route path="/needs-puzzles" element={<NeedsPuzzles />} />
              <Route path="/behind-the-scenes" element={<BehindTheScenes />} />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

// {
//   label: "Home",
//   background: "/images/background01.png",
//   content: "Treść sekcji 10",
//   textColor: "#000",
//   backgroundColor: "#000",
//   textOpacity: 0.6,
//   backgroundOpacity: 0.25,

// },
// {
//   label: "Czarna Dziura",
//   background: "/images/background09.png",
//   content: "Treść sekcji 1",
//   textColor: "#fff",
//   backgroundColor: "#fff",
//   textOpacity: 0.3,
//   backgroundOpacity: 0.15,
// },
// {
//   label: "FAQ",
//   background: "/images/background02.png",
//   content: "Treść sekcji 2",
//   textColor: "#000",
//   backgroundColor: "#000",
//   textOpacity: 0.6,
//   backgroundOpacity: 0.25,
// },
// {
//   label: "Secret Key",
//   background: "/images/background06.png",
//   content: "Treść sekcji 3",
//   textColor: "#000",
//   backgroundColor: "#000",
//   textOpacity: 0.6,
//   backgroundOpacity: 0.35,
// },
// {
//   label: "Niedokończona historia",
//   background: "/images/background07.png",
//   content: "Treść sekcji 4",
//   textColor: "#000",
//   backgroundColor: "#000",
//   textOpacity: 0.6,
//   backgroundOpacity: 0.35,
// },
// {
//   label: "The code is hungry…",
//   background: "/images/background03.png",
//   content: "Treść sekcji 5",
//   textColor: "#000",
//   backgroundColor: "#000",
//   textOpacity: 0.6,
//   backgroundOpacity: 0.35,
// },
// {
//   label: "Latarnia w Mgle",
//   background: "/images/background05.png",
//   content: "Treść sekcji 6",
//   textColor: "#000",
//   backgroundColor: "#000",
//   textOpacity: 0.6,
//   backgroundOpacity: 0.35,
// },
// {
//   label: "Telefon do przyjaciela",
//   background: "/images/background04.png",
//   content: "Treść sekcji 7",
//   textColor: "#fff",
//   backgroundColor: "#fff",
//   textOpacity: 0.3,
//   backgroundOpacity: 0.15,
// },
// {
//   label: "Twarz Twojej Marki",
//   background: "/images/background08.png",
//   content: "Treść sekcji 8",
//   textColor: "#000",
//   backgroundColor: "#000",
//   textOpacity: 0.6,
//   backgroundOpacity: 0.35,
// },
// {
//   label: "Układanka Potrzeb",
//   background: "/images/background01.png",
//   content: "Treść sekcji 9",
//   textColor: "#000",
//   backgroundColor: "#000",
//   textOpacity: 0.6,
//   backgroundOpacity: 0.35,
// },

// {
//   label: "Sekcja 11",
//   background: "/images/background11.png",
//   content: "Treść sekcji 11",
//   textColor: "#fff",
//   backgroundColor: "#fff",
//   textOpacity: 0.3,
//   backgroundOpacity: 0.15,
// },
