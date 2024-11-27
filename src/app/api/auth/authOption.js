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
        token.first_name = user?.first_name;
        token.last_name = user?.last_name;
      }
      return token;
    },

    async session({ session, token }) {
      session.token = token?.token;
      session.first_name = token?.first_name;
      session.last_name = token?.last_name;

      return session;
    },
  },

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};
