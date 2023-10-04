<template>
    <div class="container">
      <div class="bg-secondary bg-opacity-10 rounded-5">
        <div class="row p-3">
          <div class="col-lg-3 d-flex justify-content-center align-items-center mb-lg-0 mb-sm-3">
            <img 
                src="../../assets/image-dummy.jpg" 
                alt="profile" 
                width="150"
                class="rounded-circle border border-2 border-dark"
            >
          </div>
          <div class="col-lg-9">
            <div class="bg-white p-4 rounded-5">
              <div class=" d-flex gap-lg-2 gap-2 mb-3 align-items-center">
                  <b>Username</b>
                  <button class="btn btn-outline-danger btn-sm px-3 rounded-5 ">Edit Profile</button>
                  <button class="btn btn-outline-danger btn-sm px-3 rounded-5 mx-1">View Archives</button>
              </div>
    
              <div class="d-flex gap-4 align-items-center">
                <p>
                  <b>12 </b>Post
                </p>
                <p>
                  <b>647 </b>Followers
                </p>
                <p>
                  <b>1.123 </b>Following
                </p>
              </div>
              <p>Hallo rek!!, “Segala mimpi harus diperjuangkan jangan hanya dipendam”. Nama saya Erika Putri Wahyu Permadani asal Surabaya, bangga menjadi bagian dari Formasi Negara 2023! </p>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center gap-3 my-2 p-lg-2 p-3 bg-secondary bg-opacity-10 rounded-5">
        <button @click="navShow('posts')" :class="`${ itemShow == 'posts' ? 'border border-danger border-1 fw-bold' : '' } btn btn-sm text-danger rounded-5 px-3 font-monospace`">
          <i class="far fa-square"></i> POSTS
        </button>
        <button @click="navShow('saved')" :class="`${ itemShow == 'saved' ? 'border border-danger border-1 fw-bold' : '' } btn btn-sm text-danger rounded-5 px-3 font-monospace`">
          <i class="far fa-bookmark"></i> SAVED
        </button>
      </div>
      <div class="my-2 p-4 bg-secondary bg-opacity-10 rounded-top-5">
        <div class="row">
          <template v-if="itemShow == 'posts'">
            <div class="col-4 mb-4">
              <img
                src="../../assets/image-dummy.jpg" 
                alt="profile"
                class="post-image rounded-top-5 w-100 h-auto"
                style="object-fit: cover;"
              >
            </div>
          </template>

          <template v-if="itemShow == 'saved'">
            <div class="col-4 mb-4">
              <img
                src="../../assets/image-dummy.jpg" 
                alt="profile"
                class="post-image rounded-top-5 w-100 h-auto"
                style="object-fit: cover;"
              >
            </div>
            <div class="col-4 mb-4">
              <img
                src="../../assets/image-dummy.jpg" 
                alt="profile"
                class="post-image rounded-top-5 w-100 h-auto"
                style="object-fit: cover;"
              >
            </div>
            <div class="col-4 mb-4">
              <img
                src="../../assets/image-dummy.jpg" 
                alt="profile"
                class="post-image rounded-top-5 w-100 h-auto"
                style="object-fit: cover;"
              >
            </div>
          </template>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'profileComponent',
    data() {
      return {
        itemShow : 'posts'
      }
    },
    methods : {
      navShow(key){
        this.itemShow = key
      }
    }
}
</script>