@extends('layouts.app')


@section('title')
	Поиск
@endsection

@section('css')
	/css/search.css
@endsection

@section('content')
	<main onclick = "second()">
			<div class="main1">

				<div class="for_cities">
					<div class="for_cities1">
						<div id="kalas" onclick="document.getElementById('kalas').style.display = 'none';" class="city1">
							<p>Алматы</p><span> x</span>
						</div>
						<div class="city2">
							<p>Павлодар<span> 0</span></p>
							<p>Тараз<span> 0</span></p>
							<p>Костанай<span> 0</span></p>
						</div>
					</div>
				</div>


				<div class="for_cities">
					<div class="for_cities1 for_categories1">
						<p onclick = 'sixth()' style="color: rgb(240,185, 60)">Все категории</p>
						<p onclick = 'sixth()'>Услуги</p>
						<p onclick = 'sixth()'>Электроника</p>
						<p onclick = 'sixth()'>Личные вещи</p>
						<p onclick = 'sixth()'>Детям</p>
						<p onclick = 'sixth()'>Работа</p>
						<p onclick = 'sixth()'>Животные</p>
						<p onclick = 'sixth()'>Транспорт</p>
						<p onclick = 'sixth()'>Недвижимость</p>
					</div>
				</div>

				<div class="for_cities">
					<div class="for_cities1 for_sort1">
						<p>Сначала старые</p><span><input style="left: 20%" type="radio" name='sort'></span>
						<p>Сначала новые</p><span><input style="left: 24%" type="radio" name='sort'></span>
						<p>По возрастанию цены</p><span><input type="radio" name='sort'></span>
						<p>По убыванию цены</p><span><input style="left: 9%" type="radio" name='sort'></span>
					</div>
				</div>
			</div>

			<div class="main2">
				<div class="for_input">
					<input type="text">
					<img src="images/7.png">
				</div>
			</div>
		</main>
@endsection