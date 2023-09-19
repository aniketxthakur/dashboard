import { logout } from "@/store/slice/userSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

interface emailProp {
  users: {
    email: string;
  };
}
const Dropdown = () => {
  const [isProfile, setIsProfile] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const profileData = [
    { name: "Profile", link: "/" },
    { name: "Billing", link: "/organization" },
    { name: "Logs", link: "/users" },
    { name: "T&C", link: "/roles" },
  ];
  const notificationData = [
    { msg: "All Notification update off and All Notification update on" },
    { msg: "All Notification update on" },
    { msg: "All Notification update off  and All Notification update on" },
    { msg: "All Notification update on" },
    { msg: "All Notification update on and All Notification update on" },
  ];

  const bell = () => {
    setIsNotification(!isNotification);
    setIsProfile(false);
  };
  const profile = () => {
    setIsProfile(!isProfile);
    setIsNotification(false);
  };
  // access redux state data after dispatch is finihed
  const emailData = useSelector((state: emailProp) => state.users.email)
  //Logout
  const dispatch = useDispatch();
  const router = useRouter();
  const logoutuser = () => {
    if (emailData) {
      dispatch(logout());
      localStorage.removeItem("UserToken");
      router.push('/login');
      console.log("Logout Success")
    }
    else {
      alert("No User Logged In")
    }
  }

  return (
    <>
      <div className="my-1 border-r border-gray-700">
        <button type="button" className="rounded-full p-1 text-2xl font-bold mx-2 mt-1 hover:bg-blue-100" onClick={bell}>
          <IoIosNotificationsOutline />
        </button>
        {isNotification && (
          <div
            className="absolute right-0 z-10 mt-2 mr-3 p-1 text-xs text-gray-700 w-60 bg-white border rounded-md shadow-lg" onMouseLeave={() => { setIsNotification(false); }}>
            {notificationData.map((e, id) => {
              return (
                <div key={id}>
                  <div className="grid grid-cols-4 hover:bg-gray-100">
                    <div className="col-span-3">
                      <a href="#" className="block py-1 px-3">
                        {e.msg}
                      </a>
                    </div>
                    <div>
                      <p>10 min</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="mx-4 my-2">
        <button
          className="h-8 w-6 inline-flex justify-center text-xs font-medium px-4 py-2 hover:bg-blue-100 bg-blue-50 border border-blue-300 text-blue-600 rounded-full"
          type="button"onClick={profile}>
          AT
        </button>
        {isProfile && (
          <div
            className="absolute right-0 z-10 mt-2 w-52 mr-3 rounded-md shadow-lg border bg-white" onMouseLeave={() => { setIsProfile(false); }}>
            <div className="py-2 px-4 text-sm text-gray-900 border-b">
              <p className="font-semibold">CHM</p>
              {/* emailData : coming from redux state */}
              <a className="break-words text-xs">{emailData}</a>
            </div>
            <div className="p-1 text-sm text-gray-700">
              {profileData.map((e, id) => {
                return (
                  <a key={id} href={e.link} className="block py-1 px-3 hover:bg-gray-100">{e.name}</a>
                );
              })}
            </div>
            <div onClick={logoutuser} className="hover:bg-gray-100 hover:cursor-pointer p-3 text-sm text-gray-900 border-t">
              <button>Logout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
