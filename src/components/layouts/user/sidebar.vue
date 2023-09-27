<template>
    <div class="border-end bg-white" id="sidebar-wrapper">
        <div class="sidebar-heading border-bottom">
            <h3 class="m-0 text-danger fw-bold text-center">Arabelle</h3>
        </div>
        <div class="list-group list-group-flush ">
            <router-link to="/home" class="list-group-item list-group-item-action list-group-item-light p-3 my-1 text-white fw-bold bg-danger"><i class="fa fa-home"></i>&nbsp; Home</router-link>
            <router-link class="list-group-item list-group-item-action list-group-item-light p-3 my-1" to="#"><i class="fa fa-search"></i>&nbsp; Search</router-link>
            <router-link class="list-group-item list-group-item-action list-group-item-light p-3 my-1" to="#"><i class="fa fa-compass"></i>&nbsp; Explore</router-link>
            <router-link class="list-group-item list-group-item-action list-group-item-light p-3 my-1" to="#"><i class="fa fa-user"></i>&nbsp; Profile</router-link>
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