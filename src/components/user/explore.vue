<template>
    <div class="container bg-secondary bg-opacity-10 rounded-top-5 p-4">
      <div class="row">
        <div class=" col-lg-4 col-xs-6 my-3 position-relative" style="display: flex;">
          <img
            src="../../assets/image-dummy.jpg" 
            alt="profile"
            class=" post-image rounded-top-5"
          >
          <div class="bg-danger text-white bg-opacity-75 py-1 px-3 rounded-5 text-detail">
            <b class=""><i class="fa fa-heart"></i> 431 </b> &nbsp;
            <b class="shadow"><i class="fa fa-comment"></i> 957</b>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.post-image{
  object-fit: cover; 
  width: 100%; 
  height: auto; 
}

.post-image:hover{
  opacity: 40%;
  background-color: rgba(0, 0, 255, 0.469);
  
  
}

.post-image:hover ~ .text-detail {
    display: block;
  }

.text-detail{
  position: absolute; 
  z-index: 1; 
  top: 150px; 
  left: 120px;
  display: none;
}


</style>

<script>
export default {
    name: 'exploreComponent',
    data() {
      return {
        isHoverItem : false
      }
    },
    methods : {
      hovered(isHover){
        isHover ? this.isHoverItem = true : this.isHoverItem = false
      }
    }
}
</script>