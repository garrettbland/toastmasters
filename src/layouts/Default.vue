<template>
  <div class="overflow-x-hidden">
    <div class="h-2 bg-red-700 w-full"></div>
    <div class="max-w-4xl mx-auto muli">
      <!--navbar-->
        <Navbar/>
    </div>
    <div class="max-w-6xl mx-auto muli">
      <Hero/>
    </div>
    <div class="max-w-4xl mx-auto muli">
        <!--body-->
        <div class="p-4">
          <transition name="fade" appear>
            <main> <!-- a wrapper for slot is needed -->
              <slot /> <!-- the content -->
            </main>
          </transition>
        </div>
    </div>
    <div class="max-w-6xl mx-auto muli">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
export default {
  name:'Layout',
  components:{
    Navbar,
    Hero,
    Footer
  }
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
