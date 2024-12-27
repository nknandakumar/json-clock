import { useState, useEffect } from "react";
const getMonth = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const App = () => {


	const [data, setData] = useState(()=>{
		const date = new Date();
		return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds(),
		period: date.getHours() >= 12 ? "PM" : "AM",
		day: date.getDate(),
		month: getMonth[date.getMonth()],
		year: date.getFullYear()
		}
	});
    
	useEffect(() => {
	const interval = setInterval(() => {
		const date = new Date();

		setData({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds(),
			period: hour >= 12 ? "PM" : "AM",
			day: date.getDate(),
			month: getMonth[date.getMonth()],
			year: date.getFullYear(),
		});
	}, 1000);
	  return ()=> clearInterval(interval);
	},[])	
	
	
	const { hour, minute, second, period, day, month, year } = data;
	let formattedHour  = hour % 12 == 0 ? 12 : hour % 12 ;
	return (
	<section className="flex justify-center items-center">
    	<div className="flex flex-col justify-center items-start h-[100vh] font-mono font-semibold text-2xl">
 
 <div className="flex">
   
 <div className="flex  ">   <p className="text-orange-400">let</p></div>
 
 <div className=" ml-4 ">
   <p className="">
 
     {` clock = {`}
   </p>
   <p className=" clockData  ">hour: <span>{`${formattedHour},`}</span></p>
   <p className=" clockData  ">
     minute: <span className="">{`${minute},`} </span>{" "}
   </p>
   <p className=" clockData  ">
     second: <span className="">{`${second},`} </span>{" "}
   </p>
   <p className=" clockData1  ">
     period: <span className="text-green-400">{`"${period}",`} </span>{" "}
   </p>
   <p className=" clockData  ">
     day: <span className="">{day+","} </span>{" "}
   </p>
   <p className=" clockData1  ">
     month: <span className="text-green-400">{`"${month}",`} </span>{" "}
   </p>
   <p className=" clockData  ">
     year: <span className="">{year+","} </span>
   </p>
 
 
 </div>
 </div>
       
       <p className=" clockData mr-40 ">{`};`}</p>
  
   
     </div>
  </section>
	);
};

export default App;
