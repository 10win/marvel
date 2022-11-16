import {lazy, Suspense} from "react";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

import {BrowserRouter as Router, Outlet, Route, Routes} from "react-router-dom";

const Page404 = lazy(() => import("../../pages/404"));
const MainPage = lazy(() => import("../../pages/MainPage"));
const ComicsPage = lazy(() => import("../../pages/ComicsPage"));
const SingleComicLayout = lazy(() => import("../../pages/singleComicLayout/SingleComicLayout"));
const SingleCharacterLayout = lazy(() => import("../../pages/singleCharacterLayout/SingleCharacterLayout"));
const SinglePage = lazy(() => import("../../pages/SinglePage"));


const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>

                            <Route path="comics" element={<ComicsPage/>}>
                                <Route path=":id" index element={<SinglePage Element={SingleComicLayout} dataType={"comic"}/>}/>
                            </Route>

                            {/*comicId, characterId*/}

                            <Route path="characters" element={<ComicsPage/>}>
                                <Route path=":id" index element={<SinglePage Element={SingleCharacterLayout} dataType={"character"}/>}/>
                            </Route>
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;
