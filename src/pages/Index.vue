<template>
  <Layout>
    
    <!--call to action-->
    <div class="flex flex-wrap mt-12 relative">
      <div class="w-full sm:w-full md:w-1/2">
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
        <p class="mt-8 text-gray-700 text-md">
          Sign up today! Come join us in a meeting without signing up to see if its right for you.
        </p>
        <div class="flex mt-2">
          <input class="w-2/3 border border-gray-400 rounded-md focus:outline-none p-2 mr-2 hover:border-gray-500 focus:border-gray-500" placeholder="speaker@example.com" type="email">
          <button class="flex-1 bg-red-700 text-white outline-none">
            Sign Up
          </button>
        </div>
      </div>
      <div class="w-full sm:w-full md:w-1/3 p-6 sm:p-6 md:pl-12">
        <g-image class="md:absolute md:w-4/5" alt="Person public speaking" src="~/assets/conference_speaker.svg"/>
      </div>
    </div>

    <!--description-->
    <div class="flex flex-wrap-reverse md:mt-48 bg-white relative items-center">
      <div class="w-full sm:w-full md:w-2/5 px-12">
        <g-image alt="ideas & checklist" src="~/assets/forming_ideas.svg"/>
      </div>
      <div class="w-full sm:w-full md:w-3/5">
        <div>
          <h2 class="text-3xl leading-tight text-gray-900 font-bold">
            74% of Americans suffer from speech anxiety
          </h2>
          <p class="text-md text-gray-700 mt-4">
            Toastmasters gives you the opportunity to practice your public speaking skills 
            infront of a small group of people, that wants to help you grow.
          </p>
          <p class="text-md text-gray-700 mt-2 mb-4">
            Many benefits include...
          </p>
        </div>
        <div class="flex flex-col text-gray-800 font-semibold">

          <!--item-->
          <div class="flex items-center">
            <div class="w-12">
              <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="261"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div class="flex-1">Reduced fear or anxiety</div>
          </div>

          <!--item-->
          <div class="flex items-center">
            <div class="w-12">
              <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="261"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div class="flex-1">More Social Interactions</div>
          </div>

          <!--item-->
          <div class="flex items-center">
            <div class="w-12">
              <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="261"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div class="flex-1">Higher Salaries</div>
          </div>

          <!--item-->
          <div class="flex items-center">
            <div class="w-12">
              <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="261"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div class="flex-1">Improved Confidence</div>
          </div>

        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
