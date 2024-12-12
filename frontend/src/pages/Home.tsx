import Banner from "../components/Banner";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";

const HomePage = () => {
    return (<div>
        <Header />
        <div id="speciality">
            <SpecialityMenu />
        </div>
        <TopDoctors />
        <Banner />

    </div>);
}

export default HomePage;