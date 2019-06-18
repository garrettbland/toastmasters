<template>
  <Layout>
    <div class="flex flex-wrap">
      <div class="w-2/5 p-3">
        <h1 class="text-sm uppercase text-gray-500 font-semibold">About us</h1>
        <p class="">Toast Masters in Hays, KS provides developmental tools to overcome the physiological triggers that we all encounter from time to time when giving public presentations. We utilize constructive feedback, friendly environment and like minded professionals to help you build the confidence to give a great presentation. Please feel free to contact us with any questions, concerns or other input you may have.</p>
      </div>
      <div class="w-3/5 p-3">
        <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-1">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:border-blue-400 border focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane Doe">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Email
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:border-blue-400 border focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="janedoe@awesome.com">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-text">
        Question / Comment
      </label>
      <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:border-blue-400 border focus:outline-none focus:bg-white"  id="grid-last-name" rows="4" type="textarea" placeholder="How awesome of a public speaker will Toast Masters make me?" style="resize:none"></textarea>
      <p class="text-gray-600 text-xs italic">**Please DO NOT share sensitive information in this web form**</p>
    </div>
  </div>
  <button class="flex-1 bg-red-700 py-3 py-2 w-1/2 text-white rounded outline-none">
            Submit
  </button>
</form>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
