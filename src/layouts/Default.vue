<template>
  <div>
    <div class="h-2 bg-red-700 w-full"></div>

    <div class="max-w-4xl mx-auto muli">

        <!--navbar-->
        <Navbar/>

        <!--body-->
        <div class="p-4">
          <slot/>
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
