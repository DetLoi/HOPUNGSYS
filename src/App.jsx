import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hjem from "./pages/hjem"
import Findhold from "./pages/findhold"
import Knallertogforstehjaelp from "./pages/knallertogforstehjaelp"
import Ungdomsklubberne from "./pages/ungdomsklubberne"
import Kontakt from "./pages/kontakt"
import Om from "./pages/om"
import Login from "./pages/login"
import Layout from "./components/layout/layout";
import HoldPage from "./pages/holdpage"

function App() {
  return (
    <div className="app">
        <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Hjem />} />
            <Route path="/index" element={<Hjem/>}/>
            <Route path="/findhold" element={<Findhold title="Find hold"/>}/>
            <Route path="/knallertogførstehjælp" element={<Knallertogforstehjaelp/>}/>
            <Route path="/ungdomsklubberne" element={<Ungdomsklubberne/>}/>
            <Route path="/kontakt" element={<Kontakt/>}/>
            <Route path="/omungfaxe" element={<Om/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/findhold/:holdId" element={<HoldPage />} />
          </Routes>
          </Layout>
        </BrowserRouter>
    </div>


  );
}

export default App;
