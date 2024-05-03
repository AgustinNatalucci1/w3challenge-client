"use client";

import { CiSearch } from "react-icons/ci";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Searchbar = () => {
  let input = "";
  const router = useRouter();

    return (
      <div className="search-box">
        <button
        className="btn-search"
        onClick={() => {
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