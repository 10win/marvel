import ComicsList from "../components/comicsList/ComicsList";
import AppBanner from "../components/appBanner/AppBanner";
import {Outlet, useParams} from "react-router-dom";

const ComicsPage = () => {

    let {id} = useParams();
    const show = id  ? <Outlet/> : <ComicsList/>;

    return (
        <>
            <AppBanner/>
            {show}
        </>
    )
}

export default ComicsPage;