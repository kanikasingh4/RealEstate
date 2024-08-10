import { useRouter } from "next/router";
import React, { useState } from "react";
import { filterData, getFilterValues } from "../utilities/FilterData";

export default function SearchFilter() {
  const [data, setData] = useState(filterData);
  const [searchParams, setSearchParams] = useState("");

  const router = useRouter();
  const { pathname, query } = router;

  const searchFilter = (filterValue) => {
    const values = getFilterValues(filterValue);
    values.forEach((item) => {
      if (item.value && filterValue?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname, query });
  };

  const handleChange = (e) => {};

  return (
    <div className="flex container mx-auto py-5">
      <div className="flex gap-4 flex-wrap  mx-auto justify-center  ">
        {data.map((d) => {
          return (
            <div key={d.placeholder}>
              <label htmlFor="underline_select" className="sr-only">
                Underline select
              </label>
              <select
                onChange={(e) =>
                  searchFilter({ [d.queryName]: e.target.value })
                }
                id="underline_select"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option defaultValue>{d.placeholder}</option>
                {d.items.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
}
