<section id="pemerintahan" class="section-bg d-flex align-items-center">
    <div class="container">
        <div data-aos="zoom-in" data-aos-duration="1000" class="section-title">
            <h2>Pemerintahan</h2>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="shadow p-3 mb-2 rounded">
                    <h3>Visi</h3>
                    <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officiis minus similique in
                        officia, impedit labore nesciunt assumenda nihil rem.</label>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" class="shadow p-3 rounded">
                    <h3 class="mt-4">Misi</h3>
                    <ul>
                        <li>
                            <i class="bi bi-check-circle-fill"></i>
                            <label>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Qui quia harum temporibus culpa dolores
                                et.</label>
                        </li>
                        <li>
                            <i class="bi bi-check-circle-fill"></i>
                            <label>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, error?</label>
                        </li>
                        <li>
                            <i class="bi bi-check-circle-fill"></i>
                            <label>Lorem ipsum dolor sit, amet consectetur adipisicing.</label>
                        </li>
                        <li>
                            <i class="bi bi-check-circle-fill"></i>
                            <label>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ipsa.</label>
                        </li>
                        <li>
                            <i class="bi bi-check-circle-fill"></i>
                            <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod ad ab!</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <div id="pemerintahanDesa" data-aos="fade-up" data-aos-duration="1000"
                    class="d-flex align-items-center flex-row card rounded p-3 shadow mb-2">
                    <i class="bi bi-people-fill "></i>
                    <div class="ms-3">
                        <h3>Pemerintah Desa</h3>
                    </div>
                </div>
                <div id="bpd" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
                    class="d-flex align-items-center flex-row card rounded p-3 shadow">
                    <i class="bi bi-people-fill "></i>
                    <div class="ms-3">
                        <h3>Badan</h3>
                        <h3>Permusyawaratan Desa</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="card-fluid-content card-fluid">
    <div class="card-flow">
        <div class="card-header d-flex align-items-center justify-content-between">
            <h4></h4>
            <button type="button" class="btn-close"></button>
        </div>
        <div class="card-content px-2">
            <div class="row d-flex align-items-end">
                <div class="col-lg-4 ">
                    <div id="contImg">
                        <div class="img-card">
                        </div>
                    </div>

                </div>
                <div class="col-lg-8 mt-2">
                    <h4>
                    </h4>
                </div>
            </div>
            <div class="mt-2">
                <label class="mb-3"></label>
                <table id="bpdTable" class="display responsive" style="width: 100%">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Jabatan</th>
                            <th>Alamat</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</div>

@push('scripts')
    <script>

    </script>
@endpush

<div id="img-zoom" class="card-fluid p-0">
    <img src="{{ asset('storage/img/home/slider-3.jpeg') }}" width="50%" alt="">
</div>
