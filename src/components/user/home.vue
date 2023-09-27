<template>  
    <!-- Page content-->
    <div class="container-fluid row p-3 justify-content-around">
        <div class="col-xl-6 col-lg-7 col-sm-11 p-sm-3  p-xl-4 bg-secondary bg-opacity-10 rounded-top-5">
        <div class="card p-2 my-3 rounded-top-5 shadow">
            <div class="d-flex align-items-center gap-2  p-2">
            <img 
                src="../../assets/image-dummy.jpg" 
                alt="profile" 
                width="40"
                class="rounded-5 border border-1 border-dark"
            >
            <b class="">Username</b>
            <button class="btn btn-outline-danger btn-sm ms-auto rounded-5 px-3">
                <i class="fa fa-ellipsis-h"></i>
            </button>
            </div>
            <div class="card-body p-1 bg-white m-1">
            <img 
                src="../../assets/image-dummy.jpg" 
                alt="profile" 
                style="object-fit: cover; width: 100%; height: auto;"
                class=""
            >
            </div>
            <div class="p-2 gap-2 d-flex bg-secondary bg-opacity-10 rounded-5 m-1">
            <button class="btn btn-outline-danger rounded-5 px-3">
                <i class="fa fa-heart"></i> 234.2213
            </button>
            <button class="btn btn-outline-danger rounded-5 px-3">
                <i class="fa fa-comment"></i> 90.205
            </button>
            <button class="btn btn-outline-danger ms-auto rounded-5 px-3">
                <i class="fa-solid fa-bookmark"></i>
            </button>
            </div>
            <div class="p-2">
            <p class="small"><b>Username</b> Hallo rek!!, “Segala mimpi harus diperjuangkan jangan hanya dipendam”. Nama saya Erika Putri Wahyu Permadani asal Surabaya, bangga menjadi bagian dari Formasi Negara 2023! Formasi Negara adalah tonggak awal saya menjadi generasi penerus bangsa yang berprestasi.
</p>
            </div>
        </div>
        </div>
        <div class="col-xl-4 col-lg-5 mb-4 d-none d-lg-block">
        <div class=" bg-secondary bg-opacity-10 rounded-5 p-2  ">
            <div class="bg-white rounded-5 py-2 px-3 d-flex align-items-center gap-2">
            <img 
                src="../../assets/image-dummy.jpg" 
                alt="profile" 
                width="40"
                class="rounded-5 border border-1 border-dark"
            >
            <b>Username</b>
            <a class="btn btn-outline-danger btn-sm fw-bold text-decoration-none ms-auto rounded-5">Logout</a>
            </div>

            <hr>
            <b class="px-2 opacity-75">disarankan untuk anda</b>
            
            <div class="bg-white rounded-5 py-2 px-3 d-flex align-items-center gap-2 mb-2 mt-3">
            <img 
                src="../../assets/image-dummy.jpg" 
                alt="profile" 
                width="40"
                class="rounded-5 border border-1 border-dark"
            >
            <b>Username</b>
            <a class="btn btn-outline-danger btn-sm fw-bold text-decoration-none ms-auto rounded-5">Follow</a>
            </div>
            <div class="bg-white rounded-5 py-2 px-3 d-flex align-items-center gap-2 mb-2">
            <img 
                src="../../assets/image-dummy.jpg" 
                alt="profile" 
                width="40"
                class="rounded-5 border border-1 border-dark"
            >
            <b>Username</b>
            <a class="btn btn-outline-danger btn-sm fw-bold text-decoration-none ms-auto rounded-5">Follow</a>
            </div>
            <div class="bg-white rounded-5 py-2 px-3 d-flex align-items-center gap-2 mb-2">
            <img 
                src="../../assets/image-dummy.jpg" 
                alt="profile" 
                width="40"
                class="rounded-5 border border-1 border-dark"
            >
            <b>Username</b>
            <a class="btn btn-outline-danger btn-sm fw-bold text-decoration-none ms-auto rounded-5">Follow</a>
            </div>

        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeComponent',
    data() {
      return {

      }
    },
}
</script>