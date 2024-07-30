import { useState, useCallback } from "react";

const useFetchEmployees = (apiUrl, page, searchQuery) => {
  const [employeesData, setEmployeesData] = useState([]);
  const [pageData, setPageData] = useState({
    per_page: 0,
    last_page: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // if the user uses search add search query to the url, if not get the base api url page per page
  const url = searchQuery
    ? `${apiUrl}?search=${searchQuery}&page=${page}`
    : `${apiUrl}?page=${page}`;

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(url);
      const response = await res.json();
      console.log(response);
      setEmployeesData(response.data);

      // add info about the page to know how many pages are there and how many data per page
      setPageData((pageData) => ({
        ...pageData,
        per_page: response.per_page,
        last_page: response.last_page,
      }));
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setLoading(false);
  }, [url]);

  return { employeesData, pageData, loading, error, fetchData };
};

export default useFetchEmployees;
