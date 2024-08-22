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
    // destructoring
    let find = users.find((item) => {
        return item.id == +res.params.id
    })
    console.log("item", find);

    const { params } = res;

    return NextResponse.json({ message: find ? find : "không tìm thấy!" })
}
export async function PUT(request: any) {
    const data = await request.json();
    console.log("data11111 post", data);

    return NextResponse.json({
        message: "cập user thành công với method PUT",
        user: data
    })
}
export async function PATCH(request: any) {
    const data = await request.json();
    console.log("data11111 post", data);

    return NextResponse.json({
        message: "cập user thành công với method PATCH",
        user: data
    })
}
export async function DELETE(request: any) {
    const data = await request.json();
    console.log("data11111 post", data);

    return NextResponse.json({
        message: "xóa dữ liệu thành công!",
        user: data
    })
}

