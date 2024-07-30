import { useState, useCallback } from "react";

const useFetchEmployees = (apiUrl, page, searchQuery) => {
  const [employeesData, setEmployeesData] = useState([]);
  const [pageData, setPageData] = useState({
    per_page: 0,
    last_page: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // if the user uses search add search query to the url, if not get the base api url page per page
  const url = searchQuery
    ? `${apiUrl}?search=${searchQuery}&page=${page}`
    : `${apiUrl}?page=${page}`;

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const response = await res.json();
        console.log(response);
        setEmployeesData(response.data);

        // add info about the page to know how many pages are there and how many data per page
        setPageData((pageData) => ({
          ...pageData,
          per_page: response.per_page,
          last_page: response.last_page,
        }));
        setError("");
      } else
        throw new Error(`HTTP error status: ${res.status} - ${res.statusText}`);
    } catch (err) {
      console.log(err);
      setError(
        "Došlo je do pogreške prilikom dohvaćanja podataka. Molimo pokušajte kasnije."
      );
    }
    setLoading(false);
  }, [url]);

  return { employeesData, pageData, loading, error, fetchData };
};

export default useFetchEmployees;
