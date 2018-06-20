<template>
	<div class="col-lg-6 col-md-8 m-auto pt-5">
		<div class="container">
			<p class="text-center text-info">
				{{currYear }} &copy; <a class="text-info" href="http://lamotkin.ru" target="_blank">lamotkin.ru</a>
			</p>
		</div>
	</div>
</template>

<script>
    export default {
        data: function () {
            return {
                currYear: (new Date).getFullYear()
            }
        }
    }
</script>