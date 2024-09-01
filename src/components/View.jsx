import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [data, changeData] = useState([])
    const fetchDataFromApi = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(() => { fetchDataFromApi() }, [])
  return (
    <div>
      <Navbar/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">UserID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Completed status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(
                                    (value, index) => {
                                        return <tr>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.userId}</td>
                                            <td>{value.title}</td>
                                            <td>{value.completed}</td>
                                        </tr>
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default View