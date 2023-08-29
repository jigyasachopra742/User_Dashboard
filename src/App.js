import Navbar from "./scenes/global/Navbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import DashBoard from "./scenes/dashboard";
import { Routes, Route} from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calender";
import FAQ from "./scenes/faq";

import Bar from "./scenes/bar";

import Line from "./scenes/line";
import Pie from "./scenes/pie";

import Geography from "./scenes/geography";


function App() {
  const[theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Navbar />
           
              <Routes>
                <Route path="/" element = {<DashBoard />}/>
                <Route path="/team" element = {<Team />}/>
                <Route path="/invoices" element = {<Invoices />}/>
                <Route path="/contacts" element = {<Contacts />}/>
                <Route path="/form" element = {<Form />}/>
                <Route path="/calender" element = {<Calendar />}/>
                <Route path="/bar" element = {<Bar />}/>
              
                <Route path="/line" element = {<Line />}/>
                <Route path="/pie" element = {<Pie />}/>
                <Route path="/faq" element = {<FAQ />}/>
                <Route path="/geography" element = {<Geography />}/>
              
              </Routes>
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;