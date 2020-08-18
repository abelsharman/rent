@extends('layouts.app')

@section('title')
	Главная
@endsection

@section('css')
	/css/main.css
@endsection

@section('content')
	<div id="four" class="fourth">
		<div class="float1">
			<img src="images/6.jpeg" width="90%">
		</div>

		<div class="float2">
			<p>Маркет</p>
			<p>для<strong style="color: rgb(246,188,43)"> всех</strong>,</p>
			<p>и для<strong style="color: rgb(246,188,43)"> всего</strong>!</p>
			<br>
			<button>Купить</button>
			<button>Продать</button>
					
		</div>
	</div>

		
	<div v-on:click="changeStyle()"></div>


	<div class="telefon" id="tel">
		<p>У вас возникли вопросы? Можете обратиться по номеру ...</p>
		<a href="tel:+77080875510">+7(708) 087-55-10</a>
	</div>

	
@endsection