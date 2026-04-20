import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest)
{
    const token = 
        request.cookies.get('next-auth.session-token')?.value ||
        request.cookies.get('__Secure-next-auth.')
    console.log('proxy-token: ', token)
    if(!token)
    {
        return NextResponse.redirect(new URL('login', request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/about/:path*']
}