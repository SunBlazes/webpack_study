// import './src/01'
// import './src/02'
// import './src/03'
// import './src/04'
// import './src/05'
// import './src/06'
// import './src/07'
// import './src/08'
// import './src/09'
// import './src/10'
import './src/11'
// import './src/demo'

import(/* webpackChunkName: "demo" */'./src/demo').then((...arr) => {
  console.log(arr)
})