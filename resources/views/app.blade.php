<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Website Resmi Desa Jelutung</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <meta name="theme-color" content="#ffffff" />
    <link rel="apple-touch-icon" href="{{ asset('logo1.png') }}">
    <link rel="manifest" href="{{ asset('/manifest.json') }}">

</head>

<body>
    <div class="content">
        <h1>INI ADALAH APLIKASI PWA</h1>
    </div>


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
