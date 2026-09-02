import "./RoomPopup.css";

import type { Doctor } from "@/shared/types/Doctor";
import type { Room } from "@/shared/types/Room";

type RoomPopupProps = {
    open: boolean;
    room: Room | null;
    doctors: Doctor[];
    onClose: () => void;
};

export default function RoomPopup({
    open,
    room,
    doctors,
    onClose,
}: RoomPopupProps) {
    if (!open || room === null) {
        return null;
    }

    return (
        <div className="popup-overlay">
            <div className="room-popup">

                <button
                    className="close-button"
                    onClick={onClose}
                >
                    ×
                </button>

                <h2>{room.name}</h2>

                <p>
                    Room {room.number}
                </p>

                <hr />

                <h3>Doctors</h3>

                {doctors.length === 0 ? (
                    <p>No doctors assigned.</p>
                ) : (
                    <ul>
                        {doctors.map((doctor) => (
                            <li key={doctor.id}>
                                Dr. {doctor.firstName} {doctor.lastName}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}