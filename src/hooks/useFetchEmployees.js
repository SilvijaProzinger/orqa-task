import { useState, useCallback } from "react";

const useFetchEmployees = (apiUrl, initialSearch = null, initialPage = 1) => {
  const [employeesData, setEmployeesData] = useState([]);
  const [pageData, setPageData] = useState({
    current_page: 0,
    last_page: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = useCallback(
    async (searchQuery = initialSearch, page = initialPage, isNewSearch = false) => {
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
          
          // if the user triggered a new search only show the data that fits the search and not the previous data
          if (isNewSearch) { 
            setEmployeesData(response.data);
          } else {
            setEmployeesData((prevEmployees) => [
              ...prevEmployees,
              ...response.data,
            ]);
          }
          // add info about the page to know how many pages are there 
          setPageData((pageData) => ({
            ...pageData,
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
