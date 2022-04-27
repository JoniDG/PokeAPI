//import React, { useEffect, useState } from "react";

/* export const useFilter = (data, key, search) => {
  const [dataFiltered, setdataFiltered] = useState(null);

  const filter = () => {
    const filtered = data?.filter((item) => {
      return item[key]?.toLowerCase().includes(search.toLowerCase());
    });
    setdataFiltered(filtered);
   /*  if (filtered?.length > 0) {
      setdataFiltered(filtered);
    } else {
      setdataFiltered(null);
    }

 /*  useEffect(() => {
    filter();
  }, [search]);

  return dataFiltered;
};
 */

export const useFilter = (data,search) => {
const filtered = data.filter((item)=>{
    return item.name.toLowerCase().includes(search.toLowerCase());
})
  return filtered;
}


