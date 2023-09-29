<template>
    <div class="d-flex" id="wrapper">
            <!-- Sidebar-->
            <sidebarComponent></sidebarComponent>
            
            <!-- Page content wrapper-->
            <div id="page-content-wrapper" class="p-4">
              <button class="btn btn-outline-danger mb-4" @click="sidebar()" id="sidebarToggle">
                  Menu
              </button>
              <router-view></router-view>
            </div>
    </div>
    
</template>

<script>
import sidebarComponent from './sidebar.vue';

export default {
    name: 'mainUserComponent',
    data() {
      return {

      }
    },
    components: {
      sidebarComponent
    },
    methods: {
      sidebar(){
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      }
    },
}
</script>

<style scooped src="../../../assets/css/index.css"></style>
  