/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Buttons({ name, route }) {
  const [active, setActive] = useState(false);
  const location = useLocation(); // Use useLocation hook to track the current path

  useEffect(() => {
    setActive(route === location.pathname); // Update active state based on the route
  }, [location.pathname, route]);
  return (
    <Link to={route}>
      <div
        style={{
          color: active ? "#60a5fa" : "#3f3f46",
          background: active ? "#f8fafc" : "white",
        }}
        className="shadow-sm my-1 shadow-zinc-50 h-[40px] flex items-center  pl-[30px]"
      >
        {name}
      </div>
    </Link>
  );
}
