import React from "react";
import useServices from "../hooks/useServices";

const ManageServices = () => {
  const [services] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div>
      <h2>Manage Your Services:</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h4>
            {service.name}
            <button onClick={() => handleDelete(service._id)}>X</button>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
