<template>
    <Layout>
        <div style="min-height: 600px" >
            <el-card shadow="never" style="min-height: 400px" v-if="blogDetails.id">
                <div slot="header">
                    <span>{{$page.blog.title}}</span>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    发布 {{blogDetails.createTime}}
                    <br> 更新 {{blogDetails.updateTime}}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
                    <pre style="font-family: '微软雅黑'">{{blogDetails.description}}</pre>
                </div>
                <div v-html="blogDetails.content" class="markdown-body" style="padding-top: 20px"></div>
            </el-card>
            <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!blogDetails.id">
                <font style="font-size: 30px;color:#dddddd ">
                    <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
                </font>
            </el-card>
        </div>
    </Layout>

</template>
<page-query>
    query ($id:ID!) {
        blog (id:$id){
            id
            content
            description
            createTime
            updateTime
        }
    }
</page-query>
<script>
	import mavonEditor from 'mavon-editor'
	export default {
		name: "Details",
		data() {
			return {}
		},
		computed: {
			blogDetails () {
				return this.$page.blog
			}
		},
		mounted(){
			this.blogDetails.content = mavonEditor.markdownIt.render(this.blogDetails.content)
		}
	};
</script>

<style scoped>

</style>
