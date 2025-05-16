import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, photo, name, price, chef} = coffee;

    const handleDelete = (_id) =>{
        console.log(_id);

        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
        if (result.isConfirmed) {

            // start deleting the coffee
            fetch(`http://localhost:3000/coffees/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data =>{
                   if (data.deletedCount) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                      });
                    //   remove the coffee from the state
                    const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                    setCoffees(remainingCoffees)
                   }
                })
        }
        });        
    }
    return (
        <div>
            <div className="card card-side bg-[#F5F4F1] shadow-xl">
                <figure>
                    <img
                    className='w-[185px] h-[239px]'
                    src={photo}
                    alt="Movie" />
                </figure>
                <div className="flex justify-around items-center w-full gap-5">
                   <div className='flex flex-col items-start'>
                        <h2 className="text-xl font-semibold">Name: {name}</h2>
                        <p>Chef: {chef}</p>
                        <p>Price: {price}</p>
                   </div>
                    <div className="card-actions justify-end">
                     <div className="join join-vertical space-y-2.5">
                        <Link to={`/coffee/${_id}`}>
                             <button className="btn join-item">View</button>
                        </Link>
                        <Link to={`/updateCoffee/${_id}`}>
                             <button className="btn join-item">Edit</button>
                        </Link>  
                        <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;