import { timeStamp } from "console";

export async function GET(request: Request) 
{
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const level = searchParams.get('level');

    return Response.json({
        message: "GET 요청 성공!",
        params: {
            name: name || '이름 값 없음',
            level: level || '레벨 값 없음'
        },
        timestamp: new Date().toISOString()
    })
}


export async function POST(request: Request)
{
    const body = await request.json();
    console.log(`${body.name} & ${body.목적}`)

    return Response.json({
        message: "POST 요청 성공!",
        receivedData: body,
        timestamp: new Date().toISOString()
    })
}

// PUT : 전부 수정
export async function PUT(request: Request)
{
    const body = await request.json();
    console.log(`${body.name} & ${body.목적}`)

    return Response.json({
        message: "PUT 요청 성공!",
        receivedData: body,
        timestamp: new Date().toISOString()
    })
}


// PATCH : 전부 수정
export async function PATCH(request: Request)
{
    const body = await request.json();
    console.log(`${body.name} & ${body.목적}`)

    return Response.json({
        message: "PATCH 요청 성공!",
        receivedData: body,
        timestamp: new Date().toISOString()
    })
}


// DELETE
export async function DELETE(request: Request) 
{
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const level = searchParams.get('level');

    return Response.json({
        message: "DELETE 요청 성공!",
        params: {
            name: name || '이름 값 없음',
            level: level || '레벨 값 없음'
        },
        timestamp: new Date().toISOString()
    })
}