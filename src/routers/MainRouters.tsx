
import HomePage from "../shared/pages/homepage";
import SearchPage from "../shared/pages/searchPage";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";


  const MainRouters = () => {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="search" element={<SearchPage/>}></Route>

                </Routes>
            </BrowserRouter>

        )
  }

export default MainRouters