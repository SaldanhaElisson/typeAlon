
import HomePage from "../shared/pages/homepage";
import SearchPage from "../shared/pages/searchPage";
import { InfosProvider } from "../contexts/ContextAPI";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";


  const MainRouters = () => {
        return(
            <BrowserRouter>
                <InfosProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="search" element={<SearchPage/>}></Route>
                    </Routes>
                </InfosProvider>
            </BrowserRouter>
        )
  }

export default MainRouters