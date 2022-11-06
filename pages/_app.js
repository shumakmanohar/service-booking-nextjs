import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<SessionProvider session={pageProps.session}>
				<NextNProgress height={5} color="#15A34A" />
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
}

export default MyApp;
