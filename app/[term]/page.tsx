import Searchbar from "../../components/Searchbar";
import Results  from "../../components/Results";
require('dotenv').config()

async function fetchPaises(searchTerm) {
  const res = await fetch(`${process.env.API}/getList/${searchTerm}`);
  console.log("respuesta con error: ", res.status);
  const data = res.status != 204 ? await res.json() : " ";
  return data;
};

async function BrowserPage({params}) {
  let paises = await fetchPaises(params.term);
  console.log("datita: ", paises);
  
  return(
    <div>
      <Searchbar />
      <Results list = {paises} />
    </div>
  )
}

export default BrowserPage