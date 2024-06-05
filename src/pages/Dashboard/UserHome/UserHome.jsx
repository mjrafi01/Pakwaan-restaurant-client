import { Link } from "react-router-dom";
import { useAuth } from '../../../hooks/useAuth';
import { useEffect, useState } from "react";

export const UserHome = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data));
    }, [user]);

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-7 bg-white p-4 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-800">Profile Information</h1>
                <Link to={`/dashboard/editUser/${userInfo?._id}`}>
                    <button className="btn btn-neutral btn-sm">Edit Profile</button>
                </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-6">
                    {user?.photoURL ? (
                        <img
                            className="w-24 h-24 rounded-full border-4 border-gray-200"
                            src={user.photoURL}
                            alt="User profile"
                        />
                    ) : (
                        <img
                            className="w-24 h-24 rounded-full border-4 border-gray-200"
                            src={userInfo?.image}
                            alt="User profile"
                        />
                    )}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">{user?.displayName ? user.displayName : 'Anonymous User'}</h2>
                        <p className="text-gray-600">{user?.email}</p>
                    </div>
                </div>
                <div className="space-y-4">
          
                </div>
            </div>
        </div>
    );
};
