import Head from "next/head";

import Header from "./componets/Header";
import TodoContents from "./componets/TodoContents";

const App = () => {

	return (
		<>
			<Head>
				<link rel="stylesheet" href="./assets/css/reset.css" />
				<title>Next.js-ToDo</title>
				<meta charSet="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Header />
			<TodoContents/>
		</>
	);
};

export default App;
