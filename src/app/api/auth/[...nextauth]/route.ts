import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../lib/prisma";
import { comparePassword } from "@/lib/utils";
import NextAuth from "next-auth/next";

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "text",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const user = await prisma.user.findFirst({
					where: {
						email: credentials?.email,
					},
				});

				if (!user) {
					return null;
				}

				const isMatch = await comparePassword(
					credentials?.password!!,
					user.password
				);

				if (isMatch) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: "/signin",
		error: "/auth/error",
		newUser: "/signup",
	},
	callbacks: {
		jwt({ token, account, user }) {
			if (account) {
				token.id = user.id;
			}

			return token;
		},
		async session({ session, token }) {
			session.user.id = token.id;

			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
