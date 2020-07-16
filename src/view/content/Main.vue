<template>
	<div>
		<el-container>
			<el-container>
				<el-header style='padding: 0px;'>
					<TopNavBar />
				</el-header>
				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopNavBar from '@components/TopNavBar.vue'
import * as types1 from '@store/mutation-types'

@Component({
	components: {
		TopNavBar
	}
})
export default class Main extends Vue {}
</script>

<style scoped>
</style>