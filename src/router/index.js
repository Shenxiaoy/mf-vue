import order from '../views/order'


let routes = [
    // {
    //       path: '/',
    //       redirect: '/order'
    //   },
    {
        path: '/order',
        component: order,
        name: 'order',
        meta: {
            title: '订单'
        }
    }
]
export default routes