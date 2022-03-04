import Heading from './components/heading/heading.js';
import MockImage from './components/mockImage/mockImage.js';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('mock-image'));

const mockIMage = new MockImage();
mockIMage.render();
