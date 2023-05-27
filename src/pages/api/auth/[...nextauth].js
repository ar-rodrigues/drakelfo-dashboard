import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const url = `${process.env.ROUTE_URL}/api/auth/login`

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        if (res.ok) {
          const user = await res.json();
          console.log(user);
          return user;
        } else {
          const error = await res.json();
          throw new Error(error.message);
        }
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: 365 * 24 * 60 * 60, // 365 Days
  },
  callbacks: {
    async session({ session, token, user }) {
      if (user) {
        session.user = user;
      }
      return session;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },
};

export default NextAuth(authOptions);
