import NextAuth, { SessionStrategy } from "next-auth"
// import AppleProvider from "next-auth/providers/apple"
// import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  site: process.env.NEXTAUTH_URL,
  providers: [
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
  },
}

export default NextAuth(authOptions)