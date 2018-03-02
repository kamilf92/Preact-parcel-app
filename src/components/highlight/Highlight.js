import { h } from 'preact';
import Code from 'preact-prism';
import 'prismjs/themes/prism-solarizedlight.css';

const Highligth = ({ content }) => {
	return (
		<Code language='markup' code={content} />
	);
};

export { Highligth };
