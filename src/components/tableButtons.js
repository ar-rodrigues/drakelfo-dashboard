import { useState } from "react";
import LoginButton from "@/components/loginButton";

function TableButtons({
  menus,
  onSelect,
  menuSort,
  setMenuSort,
  setData,
  setShouldFetchData,
  displayData,
}) {
  const [updateStatus, setUpdateStatus] = useState("idle"); // Add state for update status

  const handleClick = (menu) => {
    onSelect(menu);
    setMenuSort({
      selectedMenu: menu,
      sort: { order: !menuSort.sort.order, field: menu },
    });
  };

  const handleUpdate = async () => {
    setUpdateStatus("loading"); // Set the update status to 'loading'
    try {
      const response = await fetch(`/api/products`);
      if (response.ok) {
        const data = await response.json(); // Extract the JSON data
        setData(data.data); // Set the data state with the received data
        setShouldFetchData(true);
        console.log("UPDATED");
        setUpdateStatus("success"); // Set the update status to 'success'
        setTimeout(()=>{
          setUpdateStatus('')
        }, 7000)
      } else {
        // Handle non-200 status
        console.error("Failed to update data. Status:", response.status);
        setUpdateStatus("error"); // Set the update status to 'error'
      }
    } catch (error) {
      console.error("Failed to update data:", error);
      setUpdateStatus("error"); // Set the update status to 'error'
    }
  };

  let updatedClass = "flex justify-center hidden w-full p-4"; // Default class
  if (updateStatus === "loading") {
    updatedClass = "flex justify-center bg-yellow-500 w-full p-4 text-white"; // Loading class
  } else if (updateStatus === "success") {
    updatedClass = "flex justify-center bg-green-500 w-full p-4 text-white"; // Success class
  } else if (updateStatus === "error") {
    updatedClass = "flex justify-center bg-red-500 w-full p-4 text-white"; // Error class
  }

  return (
    <div className="flex flex-wrap justify-between w-full bg-gray-200 p-4">
      <div className="flex">
        {menus.map((menu) => (
          <button
            key={menu}
            className={`rounded-lg py-2 px-4 mx-2 font-medium ${
              menuSort.selectedMenu === menu
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-600"
            }`}
            onClick={() => handleClick(menu)}
          >
            {menu}
          </button>
        ))}
      </div>

      <div className="flex items-center">
        <h2 className="text-black">{displayData.length} Products Found</h2>
      </div>

      <div className="flex items-right">
        <button
          className="rounded-lg py-2 px-4 mx-2 bg-indigo-600 text-white"
          onClick={handleUpdate}
        >
          Update
        </button>
        <LoginButton />
      </div>
      <div className={updatedClass}>
        {updateStatus === "loading" && "Updating..."} {/* Show loading cue */}
        {updateStatus === "success" && "DATABASE UPDATED"}{" "}
        {/* Show success message */}
        {updateStatus === "error" && "Failed to update database"}{" "}
        {/* Show error message */}
      </div>
    </div>
  );
}

export default TableButtons;
