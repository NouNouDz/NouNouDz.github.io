import React from "react";
import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import Scrollbar from "./Addons/Scrollbar";

import Homev2 from "./Components/Homev2";
import Contacts from "./Components/Contacts";
import Work from "./Components/Work"

function Router() {
  let scroller = React.useRef()

  React.useEffect(()=> {
    Scrollbar(scroller)
  })
  return (
    <div ref={scroller} style={{maxHeight: "100vh"}}>
      <div>
      <HashRouter>
        <Routes>
          <Route index element={<Homev2/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/work" element={<Work/>} />

        </Routes>
      </HashRouter>
      </div>
      </div>
  );
}

export default Router;