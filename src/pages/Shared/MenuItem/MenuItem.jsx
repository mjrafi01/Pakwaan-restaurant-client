// eslint-disable-next-line react/prop-types

export const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="flex items-center space-x-4 p-4 bg-white shadow-lg rounded-lg">
            <img
                style={{ borderRadius: '0 200px 200px 200px' }}
                className="w-[100px] h-[100px] object-cover"
                src={image}
                alt={name}
            />
            <div className="flex-1">
                <h3 className="text-xl font-bold uppercase text-gray-800">{name}</h3>
                <p className="text-gray-600">{recipe}</p>
            </div>
            <div className="text-yellow-500 text-lg font-semibold">
                ${price}
            </div>
        </div>
    );
}
