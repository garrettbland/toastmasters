// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import './tailwind.css'
import DefaultLayout from '~/layouts/Default.vue'
let config = {
  apiKey: "AIzaSyB6YveWu381zxZJ2qg3y2VVWNmrC34SK0M",
  authDomain: "toast-masters.firebaseapp.com",
  databaseURL: "https://toast-masters.firebaseio.com",
  projectId: "toast-masters",
  storageBucket: "toast-masters.appspot.com",
  messagingSenderId: "333803652484",
  appId: "1:333803652484:web:ba53506ef7f3b561"
}
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
