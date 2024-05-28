import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, SPM } from "../pages/index";

import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";


const router = createBrowserRouter(
    createRoutesFromElements(
        [
            <Route>
                <Route path="/" element={<Page1 />} />
                <Route path="/p2" element={<Page2 />} />
                <Route path="/p3" element={<Page3 />} />
                <Route path="/p4" element={<Page4 />} />
                <Route path="/p5" element={<Page5 />} />
                <Route path="/p6" element={<Page6 />} />
                <Route path="/p7" element={<Page7 />} />
                <Route path="/spm" element={<SPM />} />
            </Route>
        ]
    )
);

export default router;