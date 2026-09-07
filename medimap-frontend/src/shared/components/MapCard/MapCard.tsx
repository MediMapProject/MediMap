import "./MapCard.css";

type MapCardProps = {
    title: string;
    children: React.ReactNode;
};

export default function MapCard({
    title,
    children,
}: MapCardProps) {
    return (
        <section className="map-card">

            <div className="map-card__header">

                <h2>{title}</h2>

                <button className="map-card__button">
                    Legend
                </button>

            </div>

            <div className="map-card__content">
                {children}
            </div>

        </section>
    );
}