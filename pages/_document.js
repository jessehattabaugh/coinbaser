import Document, { Html, Head, Main, NextScript } from 'next/document';

class CommonDocument extends Document {
	/*static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}*/
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/icon180.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/icon32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/icon16.png"
					/>
					<link rel="manifest" href="/site.webmanifest"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CommonDocument;
