import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar";
import AdminPanel from "./pages/adminPanel";

function App() {
  return (
    <>
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AdminPanel />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </>
  );
}

export default App;
