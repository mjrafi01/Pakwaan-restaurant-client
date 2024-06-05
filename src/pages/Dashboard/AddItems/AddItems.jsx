import { useForm } from "react-hook-form";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";
import { SectionTitle } from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

 
  const image_hosting_key=import.meta.env. VITE_IMAGE_HOSTING_KEY
  const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

export const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            };
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <SectionTitle heading="Add an Item" subHeading="What's new?" />
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    {/* recipe details */}
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Details</span>
                        </label>
                        <textarea
                            {...register('recipe')}
                            className="textarea textarea-bordered h-24 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Recipe Details"
                        ></textarea>
                    </div>
                    <div className="form-control w-full mb-6">
                        <input
                            {...register('image', { required: true })}
                            type="file"
                            className="file-input w-full max-w-xs px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="btn btn-primary w-full py-2 flex items-center justify-center">
                        Add Item <FaUtensils className="ml-4" />
                    </button>
                </form>
            </div>
        </div>
    )
}
