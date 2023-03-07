import React from "react";
import { useGetUsersQuery } from "../../features/auth/userApi";

const Users = () => {
  const { data } = useGetUsersQuery();
  return (
    <div>
      <h1>All Users</h1>
      <div>
        <div className="w-full">
          <div className="overflow-auto lg:overflow-visible">
            <table className="table text-gray-400 border-separate space-y-10 text-sm w-full">
              <thead className="bg-gray-800 text-gray-500">
                <tr>
                  <th className="p-3 text-start">Name & Email address</th>
                  <th className="p-3 text-left">Join Date</th>
                  <th className="p-3 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                {data?.map(({ name, isAdmin, email, photoURL, join_date }) => (
                  <tr className="bg-gray-800">
                    <td className="p-3">
                      <div className="flex align-items-center">
                        <img
                          className="rounded-full h-12 w-12  object-cover"
                          src={photoURL}
                          alt={name}
                        />
                        <div className="ml-3">
                          <div className="">{name}</div>
                          <div className="text-gray-500">{email}</div>
                        </div>
                      </div>
                    </td>

                    <td className="p-3 ">
                      <p>{join_date}</p>
                    </td>
                    <td className="p-3">
                      {isAdmin ? (
                        <span className="bg-green-400 text-gray-50 rounded-md px-4 py-1">
                          Admin
                        </span>
                      ) : (
                        <span className="bg-red-400 text-gray-50 rounded-md px-4 py-1">
                          Subscribers
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
