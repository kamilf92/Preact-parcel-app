import { h } from 'preact';
import Code from 'preact-prism';
import 'prismjs/themes/prism-solarizedlight.css';

const ReactHighlight = ({ content }) => {
	return (
		<Code language='markup' code={content} />
	);
};

export { ReactHighlight };
