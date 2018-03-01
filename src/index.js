import { h, render } from 'preact';
import './styles/style.css';
import 'preact/devtools';
import 'babel-core/register';
import 'babel-polyfill';
import App from './containers/app/App';

const mountNode = document.getElementById('root');

render((<App />), mountNode, mountNode.lastChild);
