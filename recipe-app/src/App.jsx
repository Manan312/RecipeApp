import "./App.css";
import { Toaster } from "react-hot-toast";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <>
    <Toaster position="bottom-right" />
      <AppRouter></AppRouter>
    </>
  );
}

export default App;
