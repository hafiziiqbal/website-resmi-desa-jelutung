<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Website Resmi Desa Jelutung</title>

    {{-- CSS BREAKPOINT --}}
    <link rel="stylesheet" href="{{ asset('css/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/bootstrap-icons/bootstrap-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/data-tables/dataTables.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/data-tables/responsive.dataTables.min.css') }}">

    {{-- PWA BREAKPOINT --}}
    <meta name="theme-color" content="#ffffff" />
    <link rel="apple-touch-icon" href="{{ asset('logo1.png') }}">
    <link rel="manifest" href="{{ asset('/manifest.json') }}">

</head>

<body>
    @yield('pages')

    <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/data-tables/dataTables.min.js') }}"></script>
    <script src="{{ asset('vendor/data-tables/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('js/swiper-bundle.min.js') }}"></script>
    <script src="{{ asset('js/aos.js') }}"></script>
    @stack('scripts')
    <script src="{{ asset('js/script.js') }}"></script>
    <script src="{{ asset('/sw.js') }}"></script>
    <script>
        if (!navigator.serviceWorker.controller) {
            navigator.serviceWorker.register("/sw.js").then(function(reg) {
                console.log("Service worker has been registered for scope: " + reg.scope);
            });
        }
    </script>

</body>

</html>
