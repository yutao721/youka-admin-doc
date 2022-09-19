import Theme from '../theme-default/index';

import 'windi-base.css';
import 'windi-components.css';
import 'windi-utilities.css';

import './styles/var.css';
import './styles/custom.css';
import './styles/layout.css';
import './styles/code-theme.css';
import { registerComponents } from './register-components'

export default {
  ...Theme,
  // @ts-ignore
  enhanceApp({ app, router, siteData }) {
    registerComponents(app)
  }
};
