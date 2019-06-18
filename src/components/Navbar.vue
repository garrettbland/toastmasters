<template>
	<div class="flex flex-wrap justify-between p-4">
        <!--title-->
        <div>
            Toast Masters
        </div>
        <!--menu links-->
        <div>
            <!--desktop-->
            <div class="hidden sm:hidden md:block">
                <div class="flex flex-row">
                    <div class="px-4">
                        Home
                    </div>
                     <div class="px-4">
                        Login
                    </div>
                     <div class="px-4">
                        Contact
                    </div>
                </div>
            </div>
            <!--mobile-->
            <div class="block sm:block md:hidden">
                <div>
                	<button class="flex flex-row items-center outline-none focus:outline-none" @click="display = !display">
			            <div class="mr-2">
			                <span v-if="!display">Menu</span>
			                <span v-else>Close</span>
			            </div>
			            <div class="w-5 h-5">
			                <svg v-if="!display" class="pt-px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="791"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
			                <svg v-else class="pt-px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
			            </div>
			        </button>
                </div>
            </div>
        </div>
        <!-- mobile dropdown -->
        <div class="w-full bg-red-500" v-if="display">
        	Mobile drop down
        </div>
    </div>
</template>

<script>
export default {
	name:'Navbar',
	data(){
		return {
			display:false
		}
	}
}
</script>