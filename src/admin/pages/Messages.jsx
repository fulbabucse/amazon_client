import React, { useState } from "react";
import { useGetMessagesQuery } from "../../features/auth/userApi";

const Messages = () => {
  const [showMore, setShowMore] = useState(false);
  const { data } = useGetMessagesQuery();

  return (
    <div>
      <h1>Messages</h1>

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium border-b-blue-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      No.
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Messages
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map(({ _id, name, message, email }, index) => (
                    <tr
                      key={_id}
                      class="border-b transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-25 border-b-blue-400"
                    >
                      <td class="px-6 py-1 font-medium">{index + 1}</td>
                      <td class="px-6 py-1">{name}</td>
                      <td class="px-6 py-1">{email}</td>
                      <td class="px-6 py-1">
                        <p className="mb-2 text-primary font-medium text-justify font-openSans text-sm duration-500 transition-all ease-in-out">
                          {showMore ? message : `${message.slice(0, 25)}`}
                        </p>
                        <button
                          onClick={() => setShowMore(!showMore)}
                          className="block text-sm text-[#007185] font-medium hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C] cursor-pointer"
                        >
                          {showMore ? " Show less" : " Show more"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
