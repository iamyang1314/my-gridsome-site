export const constantRouterMap = [
    {
        path: '/',
        meta: {
            type: "user",
            icon: 'el-icon-star-off',
            title: '最新动态'
        }
    },
    {
        path: '/social/main',
        meta: {
            type: "user",
            icon: 'el-icon-mobile-phone',
            title: '社交圈'
        },
    },
    {
        path: '/blog/main',
        meta: {
            type: "user",
            icon: 'el-icon-edit-outline',
            title: '博客列表'
        },
    },
    {
        path: '/project/main',
        meta: {
            type: "user",
            icon: 'el-icon-service',
            title: '开源项目'
        },
    }
]
