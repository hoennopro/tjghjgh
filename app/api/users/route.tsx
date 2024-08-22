// import React from 'react'
import { NextResponse } from "next/server"
// lấy ở trong cơ sở dữ liệu.
// dùng API tương tác vào cơ sở dữ liệu==> data
const users = [
    {
        id: 1,
        name: "phương thảo",
        address: "HN"
    },
    {
        id: 2,
        name: "minh thu",
        address: "HCM"
    },
    {
        id: 3,
        name: "hồng vân",
        address: "ĐN"
    }
]
export async function GET(req: any, res: any) {
    console.log(11111, res);

    return NextResponse.json({ data: users })
}
export async function POST(request: any) {
    const data = await request.json();
    console.log("data post", data);

    return NextResponse.json({
        message: "thêm user thành công",
        user: data
    })
}
export async function PUT(request: any) {
    const data = await request.json();
    console.log("data11111 post", data);

    return NextResponse.json({
        message: "cập user thành công",
        user: data
    })
}
