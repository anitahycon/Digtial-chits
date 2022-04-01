import { useEffect, useState } from "react";

const useEmailValidate = (val) => {
  const [emailErr, setEmailErr] = useState("");
  const [showErr, setShowErr] = useState(false);

  const handler = (email) => {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) {
      setEmailErr("Please enter email");
    } else if (!pattern.test(email)) {
      setEmailErr("Please enter valid email");
    } else {
      setEmailErr("");
    }
  };
  useEffect(() => {
    setShowErr(true);
    if (showErr) {
      handler(val);
    }
  }, [val]);
  return emailErr;
};
export default useEmailValidate;
