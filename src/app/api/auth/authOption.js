import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},

      async authorize(credentials) {
        try {
          const sendData = {
            email: credentials.email,
            password: credentials.password,
          };

          const { data } = await axios.post(
            `${process.env.BACKEND_URL}/users/login`,
            sendData
          );

          return data;
        } catch (err) {
          throw new Error(
            err?.response?.data?.message || "Invalid credentials"
          );
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.token = user?.token;
      }
      return token;
    },

    async session({ session, token }) {
      session.token = token?.token;

      return session;
    },
  },

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};
