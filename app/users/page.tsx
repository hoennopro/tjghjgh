"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function page() {
    const [users, setUsers] = useState<any>();
    useEffect(() => {
        let data = axios.get("http://localhost:3000/api/user");
        data
            .then(response => {
                console.log(111, response);
                setUsers(response.data.data)
            })
            .catch(err => console.log("err", err))
    }, [])
    return (
        <div>Danh sách user
            {users?.map((item: any) => {
                return (
                    <div key={item.id}>
                        <p>id:{item.id}</p>
                        <p>name:{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
