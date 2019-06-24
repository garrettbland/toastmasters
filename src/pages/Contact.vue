<template>
  <Layout>
    <div class="flex flex-wrap max-w-5xl mx-auto p-4">
      <div class="w-full sm:w-full md:w-2/5 md:pr-3">
        <p class="text-sm uppercase text-gray-500 font-semibold">
          Join Today
        </p>
        <h1 class="text-4xl font-bold text-gray-900">
          Contact
        </h1>
        <p class="text-gray-700 leading-regular">We meet once a week at Thirstys Brew Pub & Grill in Hays KS at 12:00PM - 1:00PM. We would love to have you stop by for a meeting and try it out with lunch on us to see if its right for you.  
        </p>
        <p class="text-gray-700 leading-regular pt-4">We utilize constructive feedback, friendly environment and like minded professionals to help you build the confidence to give a great presentation. Please feel free to contact us with any questions, concerns or other input you may have.
        </p>
      </div>
      <div class="w-full sm:w-full md:w-3/5 p-3">
        <form class="w-full" action="https://formspree.io/gmorganbland@gmail.com" method="POST" v-if="successful === false">
          <input type="hidden" name="_next" value="https://toastmastershays.com/contact?success=true"/>
          <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:border-blue-400 border focus:outline-none focus:bg-white" name="name" type="text" placeholder="Jane Doe">
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email
              </label>
              <input v-model="email" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:border-blue-400 border focus:outline-none focus:bg-white" name="email" type="email" placeholder="janedoe@awesome.com">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-text">
                Question / Comment
              </label>
              <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:border-blue-400 border focus:outline-none focus:bg-white" name="question" rows="4" type="textarea" placeholder="How awesome of a public speaker will Toast Masters make me?" style="resize:none"></textarea>
              <p class="text-gray-600 text-xs italic">**Please DO NOT share sensitive information in this web form**</p>
            </div>
          </div>
          <button type="submit" @prevent.default @click="loading === false ? submit() : null" v-bind:class="emailStatus" class="flex-1 bg-red-700 py-3 py-2 w-1/2 text-white rounded outline-none">
            Submit
          </button>
        </form>
        <div class="flex w-full mt-2 pr-8 pb-8 " v-if="successful === true">
          <div class="font-bold text-gray-800 text-sm p-4 bg-green-400 rounded shadow text-green-900">
            Thank you! Your email has been submitted and a representative from Toast Masters, Hays KS will be in touch shortly. We look forward to meeting you!
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name:'Contact',
  metaInfo: {
    title: 'About us'
  },
  data(){
    return {
      successful:false,
      name:'',
      email:'',
      question:''
    }
  },
  methods:{
    validEmail(email){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    checkFormStatus(){
      if(this.$route.query.success) {
        this.successful = true
      }
    }
  },
  computed:{
    emailStatus(){
      if(this.validEmail(this.email)){
        return 'opactiy-100'
      }else{
        return 'opacity-75 cursor-not-allowed'
      }
    }
  },
  mounted(){
    this.checkFormStatus()
  }
}
</script>
