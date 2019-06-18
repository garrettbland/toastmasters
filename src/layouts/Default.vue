<template>
  <div class="overflow-x-hidden">
    <div class="h-2 bg-red-700 w-full"></div>

    <div class="max-w-4xl mx-auto muli">

        <!--navbar-->
        <Navbar/>

        <!--body-->
        <div class="p-4">
          <transition name="fade" appear>
            <main> <!-- a wrapper for slot is needed -->
              <slot /> <!-- the content -->
            </main>
          </transition>
        </div>

    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name:'Layout',
  components:{
    Navbar
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
