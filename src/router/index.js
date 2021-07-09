import Vue from 'vue'
import Router from 'vue-router'
import Container from "../views/Container";
import  ProductView from "../components/product/ProductView"
import ProductForm from "../components/product/ProductForm"
import InstockView from "../components/record/InstockView"
import RevenueRecord from "../components/record/RevenueRecord"
import ValueForm from "../components/record/ValueForm"
import InstockOrder from "../components/order/InstockOrder"
import OutstockOrder from "../components/order/OutstockOrder"
import Login from "../components/login/Login"

Vue.use(Router)

export default new Router ({
    mode: 'hash',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            name: 'maggie_frontend',
            component: Container,
            children: [
                {
                    path: 'instockOrder',
                    name: 'InstockOrder',
                    component: InstockOrder
                },
                {
                    path: 'outstockOrder',
                    name: 'OutstockOrder',
                    component: OutstockOrder
                },
                {
                    path: 'productForm',
                    name: 'ProductForm',
                    component: ProductForm
                },
                {
                    path: 'productView',
                    name: 'ProductView',
                    component: ProductView
                },
                {
                    path: 'instockView',
                    name: 'InstockView',
                    component: InstockView
                },
                {
                    path: 'revenueRecord',
                    name: 'revenueRecord',
                    component: RevenueRecord
                },
                {
                    path: 'valueForm',
                    name: 'ValueForm',
                    component: ValueForm
                }]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
