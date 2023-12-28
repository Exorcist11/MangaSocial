import { useState, useEffect } from "react";
import prodApis from "../api/home";

const useFetch = (index) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await prodApis.index();
        setData(response.data[index].data);
    };

    return data;
};

export default useFetch;
