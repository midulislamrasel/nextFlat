// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Sidebar() {
//     const [isOpen, setIsOpen] = useState(false);

//     // Function to toggle sidebar visibility
//     const toggleSidebar = () => setIsOpen(!isOpen);

//     // Function to close the sidebar
//     const closeSidebar = () => setIsOpen(false);

//     return (
//         <div className="flex h-screen w-2 mr-14 ">
//             {/* Sidebar */}
//             <div
//                 className={`fixed top-0 left-0 w-64 bg-gray-200  text-black p-5 transition-transform transform ${
//                     isOpen ? "translate-x-0" : "-translate-x-full"
//                 } h-full`}
//             >
//                 {/* Close Button inside Sidebar */}
//                 <button
//                     className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded"
//                     onClick={closeSidebar}
//                 >
//                     Close
//                 </button>

//                 <div className="text-xl font-bold mb-8">Sidebar</div>
//                 <ul>
//                     <li>
//                         <Link href="/">
//                             <span className="block py-2 px-4 hover:bg-blue-600 rounded">
//                                 Home
//                             </span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/about">
//                             <span className="block py-2 px-4 hover:bg-blue-600 rounded">
//                                 About
//                             </span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/services">
//                             <span className="block py-2 px-4 hover:bg-blue-600 rounded">
//                                 Services
//                             </span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/contact">
//                             <span className="block py-2 px-4 hover:bg-blue-600 rounded">
//                                 Contact
//                             </span>
//                         </Link>
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 p-3  bg-slate-300 ">
//                 {/* Toggle Sidebar Button (Visible on all devices) */}
//                 <div>
//                     <button
//                         className="p-2 bg-white text-red-700 rounded mb-6 text-3xl"
//                         onClick={toggleSidebar}
//                     >
//                         {isOpen ? "<" : " > "}
//                     </button>
//                     {/* -------- next------- */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// //  <div>
// //      <ul className="text-black">
// //          <li>
// //              <Link href="/services">
// //                  <h1 className="block rounded">
// //                      <Image
// //                          className="rounded-xl text-white"
// //                          src="/home.svg"
// //                          width={100}
// //                          height={100}
// //                          alt="Picture of the property"
// //                      />
// //                  </h1>
// //              </Link>
// //          </li>
// //          <li>
// //              <Link href="/services">
// //                  <span className="block rounded my-4">
// //                      <Image
// //                          className="rounded-xl"
// //                          src="/box.svg"
// //                          width={50}
// //                          height={50}
// //                          alt="Picture of the property"
// //                      />
// //                  </span>
// //              </Link>
// //          </li>
// //          <li>
// //              <Link href="/services">
// //                  <span className="block  rounded">
// //                      <Image
// //                          className="rounded-xl"
// //                          src="/chart.svg"
// //                          width={50}
// //                          height={50}
// //                          alt="Picture of the property"
// //                      />
// //                  </span>
// //              </Link>
// //          </li>
// //          <li>
// //              <Link href="/contact">
// //                  <span className="block rounded my-4">
// //                      <Image
// //                          className="rounded-xl"
// //                          src="/calendar.svg"
// //                          width={50}
// //                          height={50}
// //                          alt="Picture of the property"
// //                      />
// //                  </span>
// //              </Link>
// //          </li>
// //          <li>
// //              <Link href="/contact">
// //                  <span className="block rounded">
// //                      <Image
// //                          className="rounded-xl"
// //                          src="/sale.svg"
// //                          width={50}
// //                          height={50}
// //                          alt="Picture of the property"
// //                      />
// //                  </span>
// //              </Link>
// //          </li>
// //      </ul>
// //  </div>;
