import React from 'react';
import Header from './Header';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = (e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee);

        // send coffee data to the db
        fetch('https://coffee-store-server-side-nine.vercel.app/coffees', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            if (data.insertedId) {
                console.log('Added Successfully.');
                Swal.fire({
                    title: "Added Successfully!",
                    icon: "success",
                    draggable: true
                    });
                    
            }
        })
    }

    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-5'>
                <Header></Header>
                <h1 className="text-6xl">Add Coffee</h1>
                <p className=''>
                    It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
            </div>
            <form onSubmit={handleAddCoffee}  action="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* name */}
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    {/* Chef */}
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                    <label className="label">Chef</label>
                    <input type="text" name='chef' className="input w-full" placeholder="Enter Coffee Chef" />
                    </fieldset>
                    {/* Supplier */}
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                    <label className="label">Supplier</label>
                    <input type="text" name='supplier' className="input w-full" placeholder="Enter Coffee supplier" />
                    </fieldset>
                    {/* Taste */}
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                    <label className="label">Taste</label>
                    <input type="text" name='taste' className="input w-full" placeholder="Enter Coffee Taste" />
                    </fieldset>
                    {/* Category */}
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                    <label className="label">Price</label>
                    <input type="text" name='price' className="input w-full" placeholder="Enter Coffee Price Per Cup" />
                    </fieldset>
                    {/* Details */}
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                    <label className="label">Details</label>
                    <input type="text" name='details' className="input w-full" placeholder="Enter Coffee Details" />
                    </fieldset>
                </div>
                   {/* photo */}
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input w-full" placeholder="Enter Coffee photo url" />
                    </fieldset>

                    <input type="submit" className='btn w-full' value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;