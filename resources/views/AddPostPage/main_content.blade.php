<div class="container-fluid">
    <div class="my-wrapper row">
        <div class="col wrapper-left">
            <h1>BÀI ĐĂNG MỚI</h1>
            <div class="info-user">
                <img src="./img/avatar.jpg" alt="">
                <div>
                    <h6>@buiminhkha</h6>
                    <h6>12 November 2022 18:30</h6>
                </div>
            </div>
            {{-- <input class="custom-file-input" type="file" id="img" name="img" accept="image/*">
             --}}
             @include('AddPostPage.upload_file')
        </div>
        <div class="col wrapper-right">
            <textarea name="" id="" cols="30" rows="10" placeholder="Bạn đang nghĩ gì ?"></textarea>
            <hr>
            <button>Lưu bản nháp</button>
            <button>Đăng</button>
        </div>
    </div>
</div>