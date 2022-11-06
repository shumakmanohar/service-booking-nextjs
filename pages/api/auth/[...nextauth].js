import NextAuth from "next-auth";
import clientPromise from "../../../lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt, { compareSync } from "bcrypt";

export const authOptions = {
	pages: {
		signIn: "/login",
	},
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
				username: { label: "Username", type: "text", placeholder: "jsmith" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const email = credentials.username;
				const password = credentials.password;
				const client = await clientPromise;
				const db = client.db("service-booking-api");
				const user = await db.collection("users").findOne({ email });

				if (!user) {
					throw new Error("No User Found");
				}
				if (user) {
					console.log(user.password);
					let comparisonResult = await bcrypt.compare(password, user.password);
					console.log(comparisonResult);
					return comparisonResult ? { email: user.email } : null;
				}
				return null;
			},
		}),
	],
	secret: process.env.JWT_SECRET,
	callbacks: {
		async session({ session, token, user }) {
			let email = session.user.email;
			const client = await clientPromise;
			const db = client.db("service-booking-api");
			const db_user = await db.collection("users").findOne({ email });
			session.user.role = db_user.role;
			return session;
		},
	},
};

export default NextAuth(authOptions);
