<template>
  <Layout>

    <!--description-->
    <div class="flex flex-wrap md:mt-12 bg-white relative items-center max-w-5xl mx-auto p-4">
      <div class="w-full sm:w-full md:w-1/2 px-12">
        <g-image alt="ideas & checklist" src="~/assets/hangout.svg"/>
      </div>
      <div class="w-full sm:w-full md:w-1/2">
        <div>
          <p class="text-sm uppercase text-gray-500 font-semibold md:block">
            Fun Fact
          </p>
          <h2 class="text-3xl leading-tight text-gray-900 font-bold">
            74% of Americans suffer from speech anxiety.
          </h2>
          <p class="text-md text-gray-700 mt-4">
            Toast Masters gives you the opportunity to practice your public speaking skills 
            infront of a small group of people, that want to help you grow in a safe environment where feedback is beneficial and judgement is left at the door.
          </p>
          <p class="text-md text-gray-700 mt-2 mb-4">
            Toast Masters help you...
          </p>
        </div>
        <div class="flex flex-col text-gray-800 font-semibold">

          <!--item-->
          <div class="flex items-center">
            <div class="w-12">
              <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="261"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div class="flex-1">Reduce fear or anxiety</div>
          </div>

          <!--item-->
          <div class="flex items-center">
            <div class="w-12">
              <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="261"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div class="flex-1">Improve self-confidence</div>
          </div>

          <!--item-->
          <div class="flex items-center">
            <div class="w-12">
              <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="261"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div class="flex-1">Open up opportunities</div>
          </div>

          <!--item-->
          <div class="flex items-center">
            <div class="w-12">
              <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="261"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div class="flex-1">Develop lasting relationships</div>
          </div>

          <!--item-->
          <div class="flex items-center">
            <div class="w-12">
              <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="261"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div class="flex-1">and much more!</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name:'Index',
  metaInfo: {
    title: 'Home'
  }
}
</script>
