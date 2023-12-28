import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Test() {
    const param = useParams()
    const { slug } = param
    const [data, setData] = useState('')
    useEffect(() => {
        axios.get(`https://hanico.online/manga/${slug}`).then((res) => { setData(res) }).catch((e) => console.log(e))
    }, [])
    console.log(data)
    return (
        <div>zbc</div>
    )
}
