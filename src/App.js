import { lazy, useEffect, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, HashRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const MostPopular = lazy(() => import("./pages/MostPopular"));
const UesrProfile = lazy(() => import("./pages/UserProfile"));

function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/:username" element={<UesrProfile />} />
            <Route path="/most-popular" element={<MostPopular />} />
          </Routes>
        </HashRouter>
      </Suspense>
    </div>
  );
}

export default App;
