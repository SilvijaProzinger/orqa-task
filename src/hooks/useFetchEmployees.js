import { useState, useCallback } from "react";

const useFetchEmployees = (apiUrl, initialSearch = "", initialPage = 1) => {
  const [employeesData, setEmployeesData] = useState([]);
  const [pageData, setPageData] = useState({
    per_page: 0,
    current_page: 0,
    last_page: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = useCallback(
    async (searchQuery = initialSearch, page = initialPage) => {
      // if the user uses search add search query to the url, if not get the base api url page per page
      const url = searchQuery
        ? `${apiUrl}?search=${searchQuery}&page=${page}`
        : `${apiUrl}?page=${page}`;

      console.log(url);
      try {
        const res = await fetch(url);
        if (res.ok) {
          const response = await res.json();
          console.log(response);
          
          // if the user is searching only show data that fits the search and not the previous data
          if (searchQuery) { 
            setEmployeesData(response.data);
          } else {
            setEmployeesData((prevEmployees) => [
              ...prevEmployees,
              ...response.data,
            ]);
          }
          // add info about the page to know how many pages are there and how much data per page
          setPageData((pageData) => ({
            ...pageData,
            per_page: response.per_page,
            current_page: response.current_page,
            last_page: response.last_page,
          }));
          setError("");
        } else
          throw new Error(
            `HTTP error status: ${res.status} - ${res.statusText}`
          );
      } catch (err) {
        console.log(err);
        setError(
          "Došlo je do pogreške prilikom dohvaćanja podataka. Molimo pokušajte kasnije."
        );
      }
      setLoading(false);
    },
    [apiUrl, initialSearch, initialPage]
  );

  return { employeesData, pageData, loading, error, fetchData };
};

export default useFetchEmployees;
