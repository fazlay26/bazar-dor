// src/app/api/auth/[...all]/route.ts

import { auth } from "@/app/lib/auth";


export async function GET(req: Request) {
    return auth.handler(req);
}

export async function POST(req: Request) {
    return auth.handler(req);
}