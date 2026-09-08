import "./EmptyMapState.css";

import { Map } from "lucide-react";

import EmptyMapIllustration from "@/assets/images/pin.svg";

export default function EmptyMapState() {
    return (
        <div className="empty-map">
            <div className="empty-map__body">

                <img
                    src={EmptyMapIllustration}
                    alt="Empty map"
                />

                <h3>
                    Select a hospital to view the map
                </h3>

                <p>
                    Choose a hospital, building and floor to load
                    the interactive map and start navigating.
                </p>

            </div>

        </div>
    );
}