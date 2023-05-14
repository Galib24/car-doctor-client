/* eslint-disable react/prop-types */


const BookingRow = ({ booking,handleDelete,handleConfirm}) => {
    const { _id, date, service, price, img, status} = booking;




    return (
        <tr>
            <th>

                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>


            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                { status=== 'confirm' ? <span className="font-bold text-lime-500">Confirmed</span> :
                    <button onClick={()=>handleConfirm(_id)} className="btn rounded-lg bg-lime-500 font-bold btn-ghost btn-xs">Please Confirm</button>
                    
                }
            </th>
        </tr>
    );
};

export default BookingRow;