import { useState, useEffect } from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    //warning message in console when you go to home->new blog and new blog->home
    const abortcont=new AbortController();

    setTimeout(() => {
      fetch(url,{signal:abortcont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("Could Not Load Data!!");
          }
          return res.json();
        })
        .then((data1) => {
          setData(data1);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          //"if statement for <Link></Link> tag for not refresh the page"
          if(err.name  === "AbortError"){
            console.log('fetch aborted');
          }else{
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);
    return ()=>abortcont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
