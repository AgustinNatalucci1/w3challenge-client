"use client";

import { CiSearch } from "react-icons/ci";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Searchbar = () => {
  let input = "";
  const router = useRouter();

  function handleKeyDownn(k) {
    console.log("Key pressed: ", k)
  }

    return (
      // <div className="warp">
      //   <div className="search">
      //     <input 
      //     type="text" 
      //     className="searchTerm"
      //     placeholder="Ingrese un valor para buscar..."
      //     onChange={(event) => {
      //       input = event.target.value;
      //     }}
      //     onKeyDown={(k) => (
      //       console.log("Input"),
      //       handleKeyDownn(k)
      //     )}/>
      //     <button
      //     onClick={() => {
      //       console.log("Input: ", input);
      //       input ? router.push(`/${input}`) : "";
      //     }}>
      //       <CiSearch />
      //     </button>
      //   </div>
      // </div>
      <div className="search-box">
        <button
        className="btn-search"
        onClick={() => {
                console.log("Input: ", input);
                input ? router.push(`/${input}`) : "";
              }}>
        <i className="fas fa-search"><CiSearch /></i></button>
        <input type="text" className="input-search" placeholder="Buscar..."
        onChange={(event) => {
          input = event.target.value;
        }}/>
      </div>
    )
};


export default Searchbar;