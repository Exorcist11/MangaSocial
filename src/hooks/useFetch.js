import { useState, useEffect } from "react";
import prodApis from "../api/home";

const useFetch = (index) => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await prodApis.index();
        setData(response.data[index].data);
    };


    useEffect(() => {
        getData();
    }, []);

    return data;
};

export default useFetch;
