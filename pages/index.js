import Head from 'next/head';
import Image from 'next/image';

function HomePage() {
	return (
		<article>
			<Head>
				<title>CoinBaser</title>
			</Head>
			<header>
				<Image
					alt="coin"
					height={32}
					src="/icon512.png"
					width={32}
				/>
				<h1>CoinBaser</h1>
			</header>
			<p>an app for automating coinbase trades</p>
			<style global jsx>{`
				body {
					font-family: sans-serif;
				}
			`}</style>
		</article>
	);
}

export default HomePage;
