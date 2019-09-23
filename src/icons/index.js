import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => {
  const item = requireContext.keys().map(requireContext)
  console.log('lyq', item)
  return item
}
requireAll(req)
// console.log('lyq', requireAll(req))
