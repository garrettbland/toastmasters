<template>
  <div class="overflow-x-hidden muli">
    <div class="h-2 bg-red-700 w-full"></div>
    <div class="max-w-5xl mx-auto">
      <!--navbar-->
        <Navbar/>
    </div>
    <div class="mx-auto" v-if="isHome">
      <Hero/>
    </div>
    <div>
        <!--body-->
        <div>
          <transition name="fade" appear>
            <main> <!-- a wrapper for slot is needed -->
              <slot /> <!-- the content -->
            </main>
          </transition>
        </div>
    </div>
    <div class="max-w-6xl mx-auto">
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
  },
  computed:{

    // Checks if route is on home page. Returns boolean
    isHome(){
      if(this.$router.currentRoute.name === 'home'){
        return true
      }else{
        return false
      }
    }
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
