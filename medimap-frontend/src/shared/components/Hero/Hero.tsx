import "./Hero.css";

import HospitalIllustration from "@/assets/icons/images/hospital-illustration.png";

export default function Hero() {
    return (
        <section className="hero">

    <div className="hero__content">

        <h1>

            Găsește ușor

            <br />

            <span>drumul potrivit</span>

        </h1>

        <p>

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

</section>