import { useEffect, useState } from "react";

const useNameValidate = (val) => {
  const [nameErrr, setNameErr] = useState("");
  const [showErr, setShowErr] = useState(false);

  const handler = (name) => {
    let pattern = /^[A-Za-z0-9_]*[A-Za-z0-9][A-Za-z0-9_]*$/;
    if (!name) setNameErr("Please enter the valid user name");
    else if (!pattern.test(name))
      setNameErr(
        "Please use only letters (a-z), numbers and underscores."
      );
    else setNameErr("");
  };
  useEffect(() => {
    setShowErr(true);
    if (showErr) handler(val);
  }, [val]);
  return nameErrr;
};

export default useNameValidate;
