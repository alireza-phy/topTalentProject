import { lazy, useEffect, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const MostPopular = lazy(() => import("./pages/MostPopular"));
const UesrProfile = lazy(() => import("./pages/UserProfile"));

function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/:username" element={<UesrProfile />} />
            <Route path="/most-popular" element={<MostPopular />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
