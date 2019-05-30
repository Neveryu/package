// import Vue from 'vue'
const console = (options) => {
  /*if (Vue.prototype.$isServer) {
    return false
  }*/
  let {
    txt = '',
    type = 'log',
    ...rest
  } = options

  if(type === 'log') {
    setTimeout(window.console.log.bind(console, `${txt}`), 0)  
  } else if(type === 'info') {
    setTimeout(window.console.info.bind(console, `${txt}`), 0)  
  } else if(type === 'error') {
    setTimeout(window.console.error.bind(console, `${txt}`), 0)  
  } else {
    setTimeout(window.console.log.bind(console, `${txt}`), 0)  
  }
}

export default console
