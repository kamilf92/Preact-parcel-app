import chai from 'chai';
import assertJsx, { options } from 'preact-jsx-chai';

// when checking VDOM assertions, don't compare functions, just nodes and attributes:
options.functions = false;

chai.use(assertJsx);