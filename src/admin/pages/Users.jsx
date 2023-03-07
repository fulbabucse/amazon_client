import React from "react";
import { useGetUsersQuery } from "../../features/auth/userApi";

const Users = () => {
  const { data } = useGetUsersQuery();
  return (
    <div>
      <h1>All Users</h1>
      <div>
        <div class="w-full">
          <div class="overflow-auto lg:overflow-visible">
            <table class="table text-gray-400 border-separate space-y-10 text-sm w-full">
              <thead class="bg-gray-800 text-gray-500">
                <tr>
                  <th class="p-3 text-start">Name & Email address</th>
                  <th class="p-3 text-left">Join Date</th>
                  <th class="p-3 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                {data?.map(({ name, isAdmin, email, photoURL, join_date }) => (
                  <tr class="bg-gray-800">
                    <td class="p-3">
                      <div class="flex align-items-center">
                        <img
                          class="rounded-full h-12 w-12  object-cover"
                          src={photoURL}
                          alt={name}
                        />
                        <div class="ml-3">
                          <div class="">{name}</div>
                          <div class="text-gray-500">{email}</div>
                        </div>
                      </div>
                    </td>

                    <td class="p-3 ">
                      <p>{join_date}</p>
                    </td>
                    <td class="p-3">
                      {isAdmin ? (
                        <span class="bg-green-400 text-gray-50 rounded-md px-4 py-1">
                          Admin
                        </span>
                      ) : (
                        <span class="bg-red-400 text-gray-50 rounded-md px-4 py-1">
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
