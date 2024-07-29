import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <Oval
        visible={true}
        height="32"
        width="32"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};

export default Loader;
