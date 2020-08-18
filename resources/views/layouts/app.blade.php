<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="/css/index.css">
	<link rel="stylesheet" href="@yield('css')">
	
	<title>@yield('title')</title>
</head>
<body>
	<div id="app">
		@include('inc.header')
	
		@yield('content')

		@include('inc.footer')

	</div>

	<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<script src="/js/index.js"></script>
	<script src="/js/vuee.js"></script>
	
</body>
</html>