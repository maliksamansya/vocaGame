// import { COOKIE_NAME } from "@/constants";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
// export const COOKIE_NAME = "OurSiteJWT";

export async function GET() {
    const cookieStore = cookies();

    const token = cookieStore.get("OurSiteJWT");
    if (token) {

    }
    if (!token) {
        return NextResponse.json(
            {
                message: "Unauthorized",
            },
            {
                status: 401,
            }
        );
    }

    const { value } = token;

    // Always check this
    const secret = process.env.JWT_SECRET || "";

    try {
        verify(value, secret);

        const response = {
            user: "Super Top Secret User",
        };

        return new Response(JSON.stringify(response), {
            status: 200,
        });
    } catch (e) {
        return NextResponse.json(
            {
                message: "Something went wrong",
            },
            {
                status: 400,
            }
        );
    }
}