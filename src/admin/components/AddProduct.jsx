import { Button, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState([]);

  const handleFormSubmit = async (data) => {
    Array.from(data.images).forEach(async (image) => {
      const base64 = await convertBase64(image);
      setImages((prev) => [...prev, base64]);
    });

    // if (images.length) {
    //   fetch("http://localhost:5000/admin/images", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(images),
    //   })
    //     .then(() => {})
    //     .catch((err) => console.log(err));
    // }

    // const res = await fetch("http://localhost:5000/admin/images", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(images),
    // });
    // const result = await res.json();
    // console.log(result);
  };

  useEffect(() => {
    fetch("http://localhost:5000/admin/images", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(images),
    })
      .then(() => {})
      .catch((err) => console.log(err));
  }, [images]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="w-72 mx-auto">
        <div>
          <Input
            {...register("images", { required: true })}
            label="Choose Image"
            type="file"
            multiple
            accept=".jpeg, .png, .jpg"
          />
        </div>
        <Button type="submit" className="mt-2">
          Button
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (err) => {
      reject(err);
    };
  });
};
