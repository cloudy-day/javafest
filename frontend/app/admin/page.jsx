"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
// import { verifyJwt } from "@/lib/jwt";
// import axios from "axios";
import { faSchool, faGraduationCap, faPersonChalkboard, faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Spinner } from "@material-tailwind/react";
// import moment from "moment/moment.js";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    // const handleAction = (action, id, price, oId) => {
    //     let newStat = "";
    //     if(action === "a") {
    //         newStat = "Shipped";
    //     }
    //     else if(action === "s") {
    //         newStat = "Delivered";
    //         axios.post('api/findAccount', {id})
    //             .then((response) => {
    //             let account = response.data.account[0];
    //             console.log(account);
    //             if(account){
    //             let aId = account._id;
    //             let newBalance = account.balance + +price;
    //             console.log(aId, newBalance);
    //             axios.post('api/updateBalance', {aId, newBalance})
    //             .then(() => {
    //                 const state = "Item Sell";
    //                 const date = moment().format("DD/MM/YYYY");
    //                 const time = moment().format("HH:mm");
    //                 const uId = id;
    //                 const amount = price;
    //                 console.log(date, time, state, amount, newBalance);
    //                 axios.post('api/transaction', {state, amount, newBalance, date, time, uId})
    //                     .then(() => {
    //                         toast.success("Transaction Successful");
    //                     }).catch((error) => {
    //                         toast.error("Transaction coudn't be completed");
    //                     })
    //             }).catch((error) => {
    //                 console.log(error);
    //             })
    //             }
    //             }) 
    //             .catch((error) => console.log(error))      
    //     }
    //     else { 
    //         newStat = "Cancelled";
    //         axios.post('api/findAccount', {id})
    //             .then((response) => {
    //             let account = response.data.account[0];
    //             console.log(account);
    //             if(account){
    //             let aId = account._id;
    //             let newBalance = account.balance + +price;
    //             console.log(aId, newBalance);
    //             axios.post('api/updateBalance', {aId, newBalance})
    //             .then(() => {
    //                 const state = "Order Cancel";
    //                 const date = moment().format("DD/MM/YYYY");
    //                 const time = moment().format("HH:mm");
    //                 const uId = id;
    //                 const amount = price;
    //                 console.log(date, time, state, amount, newBalance);
    //                 axios.post('api/transaction', {state, amount, newBalance, date, time, uId})
    //                     .then(() => {
    //                         toast.success("Transaction Successful");
    //                     }).catch((error) => {
    //                         toast.error("Transaction coudn't be completed");
    //                     })
    //             }).catch((error) => {
    //                 console.log(error); 
    //             })
    //             } 
    //             })
    //             .catch((error) => console.log(error))

    //     }
    //     axios.post('api/updateStat', {oId, newStat})
    //         .then(() => {
    //             window.location.href = '/orders';
    //         }).catch((error) => {
    //             console.log(error);
    //         })
    // }

    // useEffect(() => {
    //     const token = localStorage.getItem("token");  
    //     if(token){
    //         const data = verifyJwt(token);
    //         console.log(data);
    //         if(data){
    //             setLoading(false);
    //             setData(data);
    //             const fetchOrders = async (id, type) => {
    //                 try{
    //                     const response = await axios.post('api/findOrders', {id, type});
    //                     setOrders(response.data.orders); 
    //                     // ord = response.data.orders;
    //                     console.log(orders);
    //                     // setLoading(false); 
    //                 } catch(error) {
    //                     console.error(error);
    //                 }
    //             }
    //             fetchOrders(data._id, data.type);
    //         }
    //         else{ 
    //             localStorage.removeItem("token");
    //             return redirect('/signin');
    //         }
    //     }
    //     else return redirect('/signin');
        
    // }, []);

    

    // if(!loading) {
    return ( 
        <>
        <Navbar />
        <h1 className="mx-auto text-emerald-400 text-center text-3xl w-fit border-2 font-bold border-gray-200 border-b-cyan-700 mt-10 p-5 rounded-lg">Edutainment Statistics</h1>
        <div className="mx-96 grid grid-cols-3 gap-10">
           <div className=" my-20 p-10 rounded-lg shadow-xl ">
                <div className="text-4xl mb-2 text-center"> <FontAwesomeIcon icon={faSchool} /> </div>
                <div className="text-2xl text-center font-semibold ">No of Institutions</div> <hr className="my-5"></hr>
                <div className="text-center text-cyan-700 font-bold text-2xl">12345</div>
            </div> 
            <div className=" my-20 p-10 rounded-lg shadow-xl ">
                <div className="text-4xl mb-2 text-center"> <FontAwesomeIcon icon={faGraduationCap} /> </div>
                <div className="text-2xl text-center font-semibold ">No of Students</div> <hr className="my-5"></hr>
                <div className="text-center text-cyan-700 font-bold text-2xl">12345</div>
            </div> 
            <div className=" my-20 p-10 rounded-lg shadow-xl ">
                <div className="text-4xl mb-2 text-center"> <FontAwesomeIcon icon={faPersonChalkboard} /> </div>
                <div className="text-2xl text-center font-semibold ">No of Teachers</div> <hr className="my-5"></hr>
                <div className="text-center text-cyan-700 font-bold text-2xl">12345</div>
            </div> 
        </div>
        
        <h1 className="mx-auto text-emerald-400 text-center text-3xl w-fit border-2 font-bold border-gray-200 border-b-cyan-700 mt-10 p-5 rounded-lg">Pending Institution Requests</h1>
        <div className="m-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Institution name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                EIIN NO
                            </th>
                            {/* {data.type ==="Customer" ?
                            <th scope="col" className="px-6 py-3"> 
                                Seller
                            </th>
                            : */}
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            {/* } */}
                            <th scope="col" className="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            {/* <th scope="col" className="px-6 py-3">
                                Status
                            </th> */}
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* { orders && orders.length > 0 ? orders.map((order) => ( */}
                        <tr  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Nazrul Academy
                            </th>
                            <td className="px-6 py-4">
                                 111231
                            </td>
                            {/* { data.type === "Customer"
                            ?
                            <td className="px-6 py-4">
                               {order.seller.name} 
                            </td>
                            : */}
                            <td className="px-6 py-4">
                                 upzilla-postalcode, district, division 
                            </td>
                            {/* } */}
                            <td className="px-6 py-4">
                                 email
                            </td>
                            <td className="px-6 py-4">
                                <FontAwesomeIcon icon={faBangladeshiTakaSign} /> school
                            </td>
                            {/* <td className="px-6 py-4">
                                {order.orderStat} pending/accepted
                            </td> */}
                            {/* { data.type === "Customer"
                            ?
                            <td className="px-6 py-4">
                                { order.orderStat === "Ordered"
                                ?
                                <button onClick={() => handleAction("r", order.buyer, order.orderPrice, order._id)} className="py-2 px-4 font-bold cursor-pointer bg-red-600 w-fit rounded-md text-white hover:bg-red-700">Cancel Order</button>
                                :
                                order.orderStat === "Shipped"
                                ?
                                <button onClick={() => handleAction("s", order.seller, order.orderPrice, order._id)} className="py-2 px-4 font-bold cursor-pointer bg-emerald-500 w-fit rounded-md text-white hover:bg-emerald-700">Recieved?</button>
                                :
                                <div className="font-bold">None</div>
                                }
                            </td> 
                            :*/}
                            <td className="px-6 py-4">
                                {/* { order.orderStat === "Ordered"
                                ?  */}
                                <div className="flex justify-center">
                                <button onClick={() => handleAction("a", order.seller, order.orderPrice, order._id)} className="py-2 px-4 font-bold cursor-pointer bg-green-500 w-fit rounded-md text-white hover:bg-emerald-700">Accept</button>
                                <button onClick={() => handleAction("r", order.buyer, order.orderPrice, order._id)} className="ml-5 py-2 px-4 font-bold cursor-pointer bg-red-600 w-fit rounded-md text-white hover:bg-red-700">Reject</button>
                                </div>
                                {/* :
                                <div className="font-semibold">None</div> 
                                } */}
                            </td>
                            {/* } */}
                        </tr>
                        {/* // )) */}
                        {/* // : <div className="mx-auto my-5 text-2xl text-center font-semibold">No pending requests!</div> */}
                        {/* // } */}
                    </tbody>
                </table>
            </div> 
            {/* <div className="flex justify-center">
                <button onClick={() => window.location.href = '/products'} className="mx-auto my-32 text-lg px-5 py-3 border-2 border-emerald-400 rounded-md hover:bg-emerald-400 hover:shadow-xl transition duration-300 hover:text-white hover:scale-105">Explore More Products</button>
            </div> */}
        </div>
        <Footer name={"fixed"}/> 
        </>
     );
    }
//     else return (
//         <div className="pt-80 flex justify-center"><Spinner color ="green" className="h-14 w-14" />;</div>
//     )
// }
 
export default Orders;