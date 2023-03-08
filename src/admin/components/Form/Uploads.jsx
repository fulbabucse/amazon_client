import React, { useEffect, useState } from "react";

const Uploads = () => {
  const [urls, setUrls] = useState([]);
  const handleSubmit = async (data) => {
    data.preventDefault();

    const files = data.target.images.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`image`, files[i]);

      try {
        const response = await fetch(process.env.REACT_APP_IMGBBLINK, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        setUrls((prev) => [...prev, result.data.url]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    console.log(urls);
  }, [urls]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="images" multiple />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Uploads;
