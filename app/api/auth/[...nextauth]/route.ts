import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
        })
    ],
    callbacks: {
        async session({ session }) {
            console.log(session,"testing")
            return session
        },
        async signIn({ profile }) {
            console.log(profile,"demodata")
            return true
        }
    }
})


export { handler as GET, handler as POST }