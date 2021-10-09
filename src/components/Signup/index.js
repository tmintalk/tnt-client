import { useEffect } from "react";
import { useSelector } from "react-redux";
import SignupForm from "../SignupForm";

const Signup = () => {
  const { user } = useSelector((state) => state);

  useEffect(() => {
    console.log('hi');
    if (user.data) {
      window.location.href = "/"  
      console.log('i');
    }
  }, [user]);

  return (
    <>
      <SignupForm />
    </>
  );
};

export default Signup;
