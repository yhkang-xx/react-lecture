import { useEffect, useState } from 'react';

// Custom Hook
export default function useFetch(url: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, [url]);	// []는 1회만 실행시키고자 할 때

  return data;

}