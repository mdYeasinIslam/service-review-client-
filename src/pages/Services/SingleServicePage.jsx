// import React, { useContext, useEffect, useState } from "react";
// import { AuthProvider } from "../../Context/UserContext";

// import "./Service.css";
// import Service from "./Service";
// const SingleServicePage = () => {
//   const { user } = useContext(AuthProvider);
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/services")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         setServices(data);
//       });
//   }, []);
//   //   console.log(services)
//   return (
//     <div>
//       <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[96%] mx-auto mt-10">
//         {services.map((service) => (
//           <Service key={service._id} service={service} />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default SingleServicePage;
