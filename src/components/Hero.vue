<template>
  <div>

    <!--call to action-->
    <div class="flex flex-wrap lg:mt-8 bg-white relative items-center max-w-5xl mx-auto p-4">
      <div class="w-full sm:w-full md:w-1/2 items-start inline-block">
        <p class="text-sm uppercase text-gray-500 font-semibold md:block">
          Toast Masters Hays, KS
        </p>
        <h1 class="text-5xl font-bold text-gray-900 leading-tight">
          Practice Public Speaking
        </h1>
        <p class="text-gray-700 pr-8 pt-2 text-lg md:block">
          We are a club that allows you to practice your public speaking with like minded speakers.
        </p>
        <p class="text-gray-700 italic pr-8 mt-4 text-lg md:block border-l-2 pl-2">
          Build confidence in the work place, socially, and create a better you.
        </p>
      </div>
      <div class="w-full sm:w-full md:w-1/2 pb-8 md:block">
        <g-image alt="Person public speaking" src="~/assets/conference_speaker.svg"/>
      </div>
    </div>

    <div class="bg-gray-200 my-12 p-4">
        <div class="max-w-lg mx-auto text-center py-12">
          <div class="text-3xl font-bold text-black-900">
            Try us out!
          </div>
          <p class="py-2 text-gray-700 text-md">
            Sign up today! Come join us in a meeting without signing up to see if its right for you. We meet weekly on Wednesdays at 12:00 PM at Thirstys Brew Pub & Grill in Hays, KS
          </p>
          <form action="https://formspree.io/gmorganbland@gmail.com" method="POST" class="flex w-full mt-2 pr-8 pb-8" v-if="successful === false">
            <input type="hidden" name="_next" value="https://toastmastershays.com?success=true"/>
            <input name="email" v-model="email" class="appearance-none block w-2/3 bg-white text-gray-700 rounded py-3 px-4 mr-2 leading-tight focus:border-blue-400 border focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="speaker@example.com">
              <button type="submit" @prevent.default @click="loading === false ? submit() : null" v-bind:class="emailStatus" class="flex flex-1 items-center justify-center text-center text-white rounded bg-red-700 focus:outline-none">
                <div v-if="loading === false" class="w-5 h-5 mx-2">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="261"><path d="M20 6L9 17 4 12"/></svg>
                </div>
                <div v-if="loading === false" class="mr-2">
                  Submit
                </div>
                <div v-if="loading === true" class="w-5 h-5 loading">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
                </div>
              </button>
          </form>
          <div class="flex w-full mt-2 pr-8 pb-8 " v-if="successful === true">
            <div class="font-bold text-gray-800 text-sm p-4 bg-green-400 rounded shadow text-green-900">
              Thank you! Your email has been submitted and a representative from Toast Masters, Hays KS will be in touch shortly. We look forward to meeting you!
            </div>
          </div>

        </div>
    </div>

  </div>
</template>

<script>
export default {
	name:'Hero',
	data(){
		return {
      loading:false,
			email:'',
      successful:false,
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