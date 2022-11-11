import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data, e);
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    alert("Service Added Successfully");
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div id="addservice" className="w-50 mx-auto">
      <h2>Please Add a Service</h2>
      <br />
      <form
        className="d-flex flex-column"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <input
          className="mb-2 "
          placeholder="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2 "
          placeholder="description"
          {...register("description")}
        />

        <input className="mb-2 " placeholder="Imgae url" {...register("img")} />
        <input
          className="mb-2 "
          placeholder="price"
          type="number"
          {...register("price", { required: true, min: 18, max: 99 })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddService;
