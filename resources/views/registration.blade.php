@extends('layouts.app')


@section('title')
	Регистрация
@endsection

@section('css')
	/css/registration.css
@endsection

@section('content')
	<main onclick = "second()">
		<div class="main1">
			<h1>Регистрация</h1>

			<table>
				<tr>
					<td>ФИО</td>
					<td><input type="text" required></td>
				</tr>
	
				<tr>
					<td>Город</td>
					<td class="cssmenu1">
						<input type="text">
						<div class='cssmenu' style="width:300px">
  							<ul>
     							<categories></categories>	
  							</ul>
						</div>	
					</td>
				</tr>

				<tr>
					<td>Номер Телефона</td>
					<td><input type="text" required></td>
				</tr>

				<tr>
					<td>Почта</td>
					<td><input type="email" required></td>
				</tr>
			</table>
			<button>Регистрация</button>	
		</div>
	</main>
@endsection