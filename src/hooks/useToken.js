const { useEffect } = require("react");
const { useState } = require("react");

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/admin/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("cc_token", data.token);
          setToken(data.token);
        })
        .catch((err) => console.error(err));
    }
  }, [email]);
  return [token];
};

export default useToken;
