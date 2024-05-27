"use client"
import { useState } from "react"
const App = () => {
  const [userName,setUserName] = useState("")
  const [passsword,setPasssword] = useState("")
  return (
    <div style={{
        backgroundImage: "url('/Rectangle 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
       className="flex justify-center items-center ">
            <div className="bg-[#000000] absolute left-[15%] top-[0%] rounded-full w-[500px] h-[500px] border-opacity-50 border-black border-solid border-[50px] bg-opacity-10"></div>
        <div className=" flex  items-center bg-white bg-opacity-10 rounded-[70px] shadow-xl relative ">
        <div className="flex flex-col justify-center items-center w-[550px] h-[450px] ">
        <h1 className="text-6xl text-white font-semibold">LOGIN</h1>
       <input 
         type="text"
         name="username"
         placeholder="Username"
         className=" bg-slate-50 w-[400px] h-[60px] pl-5 mt-5 bg-opacity-25"
         value={userName}
         onChange={(event) => setUserName(event.target.value)}
         />
       <input 
         type="password"
         name="password"
         placeholder="Password"
         className=" bg-slate-50 w-[400px] h-[60px] pl-5 mt-5 bg-opacity-25"
         value={passsword}
         onChange={(event) => setPasssword(event.target.value)}
         />
      <div className="flex flex-row ml-12 mt-6">
        <button className="bg-[#000000] bg-opacity-70 text-white pl-20 pr-20 opacity-80">LOGIN</button>
        <div className="flex flex-col items-center ml-14 text-white opacity-65">
          <a href="#" className="w-[180px] h-[28px] mb-1">Forgot password</a>
          <a href="#" className="w-[97px] h-[28px] ">Register</a>
        </div>
      </div>
         </div>
         </div>
    </div>
  )
}
export default App