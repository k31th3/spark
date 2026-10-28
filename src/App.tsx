import { BrowserRouter } from "react-router-dom";

import { Cursor, PixelCatAsset } from "@/components";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>

      <Cursor follower={<PixelCatAsset />} />

      <AppRoutes />

    </BrowserRouter>
  );
}

export default App;