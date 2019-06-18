<template>
    <!--call to action-->
    <div class="flex flex-wrap-reverse md:mt-8 bg-white relative items-center">
      <div class="md:w-2/5 pl-8 items-start inline-block">
        <p class="text-sm uppercase text-gray-500 font-semibold">
          Toast Masters Hays, KS
        </p>
        <h1 class="text-4xl font-bold text-gray-900">
          Practice Public Speaking
        </h1>
        <p class="text-gray-700 pr-8 text-lg">
          Practice your public speaking with like minded speakers. Build confidence in the 
          work place, socially, and create a better you.
        </p>
        <p class="mt-8 pr-8 text-gray-700 text-md">
          Sign up today! Come join us in a meeting without signing up to see if its right for you.
        </p>
        <div class="flex w-full mt-2 pr-8 pb-8">
          <input class="appearance-none block w-2/3 bg-gray-200 text-gray-700 rounded py-3 px-4 mr-2 leading-tight focus:border-blue-400 border focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="speaker@example.com">
          <button class="flex-1 bg-red-700 w-1/3 text-white rounded outline-none">
            Sign Up
          </button>
        </div>
      </div>
      <div class="md:w-3/5 pr-8 items-end inline-block pl-8 pb-8">
        <g-image alt="Person public speaking" src="~/assets/conference_speaker.svg"/>
      </div>
    </div>
        
</template>

<script>
export default {
	name:'Call',
	data(){
		return {
			display:false
		}
	}
}
</script>