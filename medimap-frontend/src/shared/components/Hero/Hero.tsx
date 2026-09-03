import "./Hero.css";

import HospitalIllustration from "@/assets/images/hospital-illustration.png";
import SearchBar from "@/pages/Map/components/SearchBar/SearchBar";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero__content">

                <div className="hero__top">

                    <div className="hero__text">

                        <h1 className="hero__title">
                            Găsește ușor
                            <br />
                            <span>drumul potrivit</span>
                        </h1>

                        <p className="hero__description">
                            Harta interactivă a spitalului te ajută să găsești
                            rapid departamente, cabinete și medici.
                        </p>

                    </div>

                    <div className="hero__image">
                        <img
                            src={HospitalIllustration}
                            alt="Hospital illustration"
                        />
                    </div>

                </div>

                <SearchBar />
            </div>

        </section>
    );
}