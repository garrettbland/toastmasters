<template>
    <footer class='mt-12 w-full text-center border-t border-grey-500 p-4'>
    <p class="text-sm uppercase text-gray-500 font-semibold">
        © {{ new Date().getFullYear() }} Toast Masters | Hays,KS
      </p>   
    </footer>    
</template>

<script>
export default {
	name:'Footer',
	data(){
		return {
			display:false
		}
	}
}
</script>