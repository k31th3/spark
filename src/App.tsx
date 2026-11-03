import { BrowserRouter } from "react-router-dom";

import { Cursor, AnimatedPixelCat } from "@/components";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>

      <Cursor follower={<AnimatedPixelCat />} followerSize={36} />

      <AppRoutes />

    </BrowserRouter>
  );
}

export default App;