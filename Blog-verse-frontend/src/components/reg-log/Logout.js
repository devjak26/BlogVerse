import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../service/api";
const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    const loguser = async () => {
      try {
        const data = await logout();
        if (data.status === 200) {
          // window.localStorage.clear();
          history.replace("/login");
        }
        else throw new Error("Error");
      } catch (err) {
        return <h1>Error</h1>;
      }
    };
    loguser();
  }, []);
  return (
    <>
      <h1>Logout</h1>
    </>
  );
};
export default Logout;
