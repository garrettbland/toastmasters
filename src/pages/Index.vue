<template>
  <Layout>
    
    <div class="flex flex-wrap my-12">
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
        <g-image class="md:absolute md:w-2/3" alt="Person public speaking" src="~/assets/conference_speaker.svg"/>
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
