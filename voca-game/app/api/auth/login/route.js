// import { COOKIE_NAME } from "@/constants";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
// export const COOKIE_NAME = "OurSiteJWT";
// const MAX_AGE = 60 * 60 * 24 * 30; // days;
const MAX_AGE = 10 // days;


export async function POST(request) {
    const body = await request.json();

    const { username, password } = body;

    if (username !== "admin" || password !== "admin") {
        return NextResponse.json(
            {
                message: "Unauthorized",
            },
            {
                status: 401,
            }
        );
    }

    // Always check this
    const secret = process.env.JWT_SECRET || "";

    const token = sign(
        {
            username,
        },
        secret,
        {
            expiresIn: MAX_AGE,
        }
    );

    const seralized = serialize("OurSiteJWT", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: MAX_AGE,
        path: "/",
    });

    const response = {
        message: "Authenticated!",
    };

    return new Response(JSON.stringify(response), {
        status: 200,
        headers: { "Set-Cookie": seralized },
    });
}