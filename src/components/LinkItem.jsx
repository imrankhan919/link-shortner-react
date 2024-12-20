import React, { useContext } from "react";
import LinkContext from "../context/LinkContext";

const LinkItem = ({ link }) => {
  const { dispatch } = useContext(LinkContext);

  const handleDelete = (id) => {
    dispatch({
      type: "REMOVE_URL",
      payload: id,
    });
  };

  return (
    <div className="relative border bg-white rounded-md p-3 flex items-center justify-between my-2 duration-200">
      <div>
        <a
          href={link.data}
          target="_blank"
          className="text-blue-800 text-xl font-bold"
        >
          {link.data}
        </a>
        <p className="text-sm my-3 text-gray-500">{link.originalURL}</p>

        <div
          onClick={() => handleDelete(link.id)}
          className="bg-red-700 h-7 w-7 text-center absolute -top-3 -right-3 rounded-full hover:bg-red-900"
        >
          <p className="text-white font-bold">x</p>
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
