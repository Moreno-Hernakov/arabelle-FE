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

<style scooped>

#wrapper {
  overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  transition: margin 0.25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

body.sb-sidenav-toggled #wrapper #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }
  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }
  body.sb-sidenav-toggled #wrapper #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>

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

<!-- <style scooped src="../../assets/admin/css/style.css"></style> -->
  