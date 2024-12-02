import Banner from "../components/Banner";
import Footer from "../components/Footer";
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
        <Footer />
    </div>);
}

export default HomePage;