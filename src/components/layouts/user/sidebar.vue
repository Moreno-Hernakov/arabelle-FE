<template>
    <div class="border-end bg-white" id="sidebar-wrapper">
        <div class="sidebar-heading border-bottom">
            <h3 class="m-0 text-danger fw-bold text-center">Arabelle</h3>
        </div>
        <div class="list-group list-group-flush ">
            <router-link :class="`${ $route.path == '/home' ? ' text-white fw-bold bg-danger ' : ''} list-group-item list-group-item-action list-group-item-light p-3 my-1`" to="home"><i class="fa fa-home"></i>&nbsp; Home</router-link>
            <router-link :class="`${ $route.path == '/search' ? ' text-white fw-bold bg-danger ' : ''} list-group-item list-group-item-action list-group-item-light p-3 my-1`" to="search"><i class="fa fa-search"></i>&nbsp; Search</router-link>
            <router-link :class="`${ $route.path == '/explore' ? ' text-white fw-bold bg-danger ' : ''} list-group-item list-group-item-action list-group-item-light p-3 my-1`" to="explore"><i class="fa fa-compass"></i>&nbsp; Explore</router-link>
            <router-link :class="`${ $route.path == '/profile' ? ' text-white fw-bold bg-danger ' : ''} list-group-item list-group-item-action list-group-item-light p-3 my-1`" to="profile"><i class="fa fa-user"></i>&nbsp; Profile</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebarComponent',
    data() {
      return {

      }
    },
}
</script>