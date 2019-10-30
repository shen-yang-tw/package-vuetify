<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <BreadCrumb :items="val.items" isBlue="val.isBlue" msg="val.msg"/>
      <!-- or <BreadCrumb :items="[{disabled: false, href: 'breadcrumbs_dashboard', text: 'Link1'}, {disabled: true, href: 'breadcrumbs_dashboard', text: 'Link2'}]" isBlue msg="Text"/> -->
      <!-- 'items' must use [v-bind:] -->
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
/*
import HelloWorld from './components/HelloWorld';
import BreadCrumb from './components/BreadCrumb';
*/

export default {
  name: 'App',
  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue'), /* webpackChunkName: 'hello-world' */
    BreadCrumb: () => import('@/components/BreadCrumb.vue'),
  },
  data: () => ({
    val: {
      items: [
        {disabled: false, href: 'breadcrumbs_dashboard', text: 'Link1'}, {disabled: true, href: 'breadcrumbs_dashboard', text: 'Link2'}
      ],
      isBlue: true,
      msg: "Text"
    }
  }),
};
</script>
