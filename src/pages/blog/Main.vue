<template>
    <Layout>
        <div>
            <el-card shadow="never" style="margin-bottom: 20px">
                <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
                <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
                <el-button style="margin-left: 10px" icon="el-icon-share" type="warning" plain circle></el-button>
                <el-button type="primary" icon="el-icon-edit" round plain style="float: right;" @click="goAdd">写博文</el-button>
            </el-card>
            <div v-if="blogs.length">
                <el-card shadow="hover" v-for="(item,index) in blogs" :key="'p'+index" style="margin-bottom: 20px" v-if="!item.hide">
                    <div slot="header">
                        <el-row>
                            <el-col :span="16">
                            <span>
                                <a  style="text-decoration:none;cursor:pointer" >
                                    <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{item.node.updated_at}}  更新
                                </a>
                            </span>
                            </el-col>
                            <el-col :span="8">
                                <div style="text-align: right;">
                                    <el-button style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                        最近更新 {{item.node.updated_at}}
                    </div>
                    <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
                        {{item.node.description}}
                    </div>
                </el-card>
                <div style="text-align: center;margin-top: 10px">
                    <Pager :info="$page.allBlogList.pageInfo"/>
                </div>

            </div>
            <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else>
                <font style="font-size: 30px;color:#dddddd ">
                    <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
                </font>
            </el-card>
        </div>
    </Layout>
</template>
<page-query>
    query ($page: Int) {
        allUser{
            edges {
                node {
                    id
                    login
                    followers
                    following
                }
            }
        }
        allBlogList(perPage:5, page:$page) @paginate {
            pageInfo {
                totalPages
                currentPage
            }
            edges {
                node {
                    id
                    description
                    updated_at
                }
            }
        }
    }
</page-query>
<script>
	import { Pager } from 'gridsome'
	export default {
		components: {
			Pager
		},
		name: "blogPages",
		data() {
			return {
				query: {
					page: 1,
					pageSize: 5,
					pageNumber: 1
				},
				loading: false,
				searchKey: "",
			}
		},
		computed: {
			user () {
				return this.$page.allUser.edges[0].node
			},
			blogs () {
				return this.$page.allBlogList.edges
			},

		},
		methods: {
			search() {
				for (let i = 0; i < this.blogs.length; i++) {
					this.blogs[i].node.hide = this.blogs[i].node.description.indexOf(this.searchKey) < 0
				}
			},
			goAdd() {
				if (!this.token) {
					this.$message({
						message: '请绑定有效的Token',
						type: 'warning'
					})
					return
				}
				this.$router.push('/user/blog/add')
			}
		}
	}
</script>

<style scoped>

</style>
