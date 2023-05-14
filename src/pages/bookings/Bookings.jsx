import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
<h2 className="text-5xl">Your bookings: {bookings.length}</h2>
        </div>
    );
};

export default Bookings;