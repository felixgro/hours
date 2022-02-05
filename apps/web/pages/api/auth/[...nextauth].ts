import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "database",
        maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
        updateAge: 12 * 60 * 60 * 1000, // 12 hours
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },
        })
    ],
    callbacks: {
        jwt: async ({ token, account }) => {
            if (account?.access_token) token.access_token = account.access_token;
            return token;
        },
    }
});