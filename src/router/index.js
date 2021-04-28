import order from '../views/order'


let routes = [
    // {
    //       path: '/',
    //       redirect: '/order'
    //   },
    {
        path: '/shop',
        component: order,
        name: '商品',
        meta: {
            title: '商品'
        }
    }
]
export default routes