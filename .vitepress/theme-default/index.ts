import './styles/vars.css'
import './styles/layout.css'
import './styles/code.css'
import './styles/custom-blocks.css'
import './styles/sidebar-links.css'

import { Theme } from 'vitepress'
// @ts-ignore
import Layout from './Layout.vue'
// @ts-ignore
import NotFound from './NotFound.vue'

const theme: Theme = {
  Layout,
  NotFound
}

export default theme
