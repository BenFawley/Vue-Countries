import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import { provideApolloClient, useQuery } from "@vue/apollo-composable";
// import { GET_COUNTRY_BY_ALPHA3CODE } from '../graphql/queries'
// import { apolloClient } from "../main";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/countries/:id',
      name: 'countries',
      component: () => import('../views/CountryDetailsView.vue'),
      // beforeEnter(to, from, next){
      //   const query = provideApolloClient(apolloClient)(() => useQuery(GET_COUNTRY_BY_ALPHA3CODE, {alpha3Code: to.params.id}));
      //   // console.log(query);
      //   to.params.country = query;
      //   next();
      // }
    }
  ]
})

export default router
