import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
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
        }),
    ],
    secret: process.env.AUTH_SECRET,
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    callbacks: {
        jwt: async ({ token, account }) => {
            if (account?.access_token) {
                token.access_token = account.access_token;
            }
            return token;
        },
        redirect: async ({ url, baseUrl }) => {
            if (url === '/profile') {
                return Promise.resolve('/');
            }
            return Promise.resolve('/');
        }
    }
});