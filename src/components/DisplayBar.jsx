import React from "react";

const DisplayBar = () => {
  return (
    <div>
      <div className="flex justify-between p-4 text-orange-500">
        <div className="flex gap-4">
          <h2>ORDER TRACKING</h2>
          <span className="w-[4px] h-30 bg-orange-500 rounded-md"></span>
          <h3>SRIGRUHAFOODS@GMAIL.COM</h3>
        </div>
        <div className="flex pr-12  gap-4">
          <div className="flex items-center">
            <ion-icon name="person-outline"></ion-icon>{" "}
            <p className="pl-4">SIGN IN</p>
          </div>
          <span className="w-[4px] h-30 bg-orange-500 rounded-md"></span>
          <h2>REGISTER</h2>
        </div>
      </div>
    </div>
  );
};

export default DisplayBar;
