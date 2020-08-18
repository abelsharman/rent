<div id="login1" class="login">
	<h1 class="h2">Вход</h1>
	<div class="input_for_login">
		<p>Логин</p>
		<input type="text">
	</div>

	<div class="input_for_login">
		<p>Пароль</p>
		<input id="check" type="password">
	</div>

	<div class="input_for_know">
		<input type="checkbox">
		<p>Запомнить меня</p><br class="new_line_adapt">
		<input onclick="vision()" type="checkbox">
		<p>Показать пароль</p>
		<br>
		<a href="#">Забыли пароль?</a>
	</div>

	<div class="links">
		<a href="#"><img src="images/2.png" width="30px" alt=""></a>
		<a href="#"><img src="images/2.png" width="30px" alt=""></a>
		<a href="#"><img src="images/2.png" width="30px" alt=""></a>
	</div>

	<button>Войти</button>
	<p class="noaccp">Нет аккаунта?</p><a class="noacca" href="{{ route('registration') }}">Зарегистрируйтесь</a>
</div>




<header>
	<div class="first_line">
		<div v-bind:class="styleCSS" class="line11">
			<div class="line111">
				<span><a id = "about" href="#">О нас</a></span>
				<span><a href="#">Контакты</a></span>
				<span><a href="#">Оплата</a></span>
				<span><a href="#">Информация</a></span>
				<span><a href="#">Договор аренды</a></span>
			</div>
		</div>
	
		<div v-bind:class="styleCSS" class="line12">
			<span><img src="images/person.png" width="20px"></span>
			<span class="line121">
				<button onclick="myFirst()" v-on:click = 'moveToLogin()'>Войти</button>
			</span>
			<span class="line122">
				<a href="{{ route('registration') }}">Регистрация</a>
			</span>
		</div>
	
		<div class="line13">
			<button v-bind:style="transitionButton" v-on:click="changeStyle()"></button>
		</div>
	</div>
		
</header>




<div id="mai" onclick = "second()">
	<div class = "secondd">
		<div class = "first_div">
			<div class = "div11">
				<a href="tel:+77080875510">
					<img src="images/2.png" width= "70px">
				</a>
			</div>

			<div class = "div12">
				<a href="tel:+77080875510" style= "font-size: 1.4em;">+7(708) 087-55-10</a><br>
				<a href="#" style="color: rgb(48, 119, 255);">Онлайн поддержка</a><br>
				<p><strong style="color: rgb(48, 119, 255);">c</strong> 9:00 <strong style="color: rgb(48, 119, 255);">до </strong> 20:00</p>
			</div>
		</div>

		<div class = "second_div">
			<h2 style="color: rgb(12, 99, 166)" onclick='mainpage()'>Маркет</h2>
		</div>

		<div class = "third_div">
			<a href="{{ route('basket') }}"><img src="images/3.png"  width = "60px"></a>
		</div>

	</div>
			
	<div id="three" class="thirdd">
		<form action="{{ route('search') }}">
			<div class="thirdd1">
				<div class="search_input">
					<img src="images/5.png" width="5%" alt="" style="margin: 5px 0;">
					<input type="text" placeholder="Поиск..." required>
				</div>
        				
				<div id="container2" class="container3">
					<ul>
        				<li class="dropdown">
            				<a href="#">@{{ pp }}</a>
            				<ul class="dropdown-menu">
                				<li><a href="#" onclick = 'fourth()' v-on:click = "changeName('Акмолинская область')">Акмолинская область</a></li>
                				<li><a href="#" onclick = 'fourth()' v-on:click = "changeName('Актюбинская область')">Актюбинская область</a></li>
               					<li><a href="#" onclick = 'fourth()' v-on:click = "changeName('Алматинская область')">Алматинская область</a></li>
               					<li><a href="#" onclick = 'fourth()' v-on:click = "changeName('Атырауская область')">Атырауская область</a></li>
               					<li><a href="#" onclick = 'fourth()' v-on:click = "changeName('Восточно-Казахстанская область')">Восточно-Казахстанская область</a></li>
               					<li><a href="#" onclick = 'fourth()' v-on:click = "changeName('Жамбылская область')">Жамбылская область</a></li>
               					<li><a href="#" onclick = 'fourth()' v-on:click = "changeName('Западно-Казахстанская')">Западно-Казахстанская область</a></li>
               					<li><a href="#" onclick = 'fourth()' v-on:click = "changeName('Карагандинская область')">Карагандинская область</a></li>
              					<li><a href="#" onclick = 'fourth()' v-on:click = "changeName('Костанайская область')">Костанайская область</a></li>
               					<li><a href="#" onclick = 'fourth()' v-on:click = "changeName('Кызылординская область')">Кызылординская область</a></li>
               					<li><a href="#" onclick = 'fourth()' v-on:click = "changeName('Мангистауская область')">Мангистауская область</a></li>
               					<li><a href="#" onclick = 'fourth()' v-on:click = "changeName('Павлодарская область')">Павлодарская область</a></li>
               					<li><a href="#" v-on:click = "changeName('Северо-Казахстанская область')">Северо-Казахстанская область</a></li>
               					<li><a href="#" v-on:click = "changeName('Туркестанская область')">Туркестанская область</a></li>
           						 </ul>
        				</li>
    				</ul>
				
				</div>
					


				<div id="container1" class="container">
					<ul>
        				<li class="dropdown">
            				<a href="#">@{{ category }} &#9662;</a>
            				<ul class="dropdown-menu">
            					<li><a href="#" v-on:click = "changeCategory('Все категории')">Все категории</a></li>
                				<li><a href="#" v-on:click = "changeCategory('Услуги')">Услуги</a></li>
                				<li><a href="#" v-on:click = "changeCategory('Электроника')">Электроника</a></li>
               					<li><a href="#" v-on:click = "changeCategory('Личные вещи')">Личные вещи</a></li>
               					<li><a href="#" v-on:click = "changeCategory('Детям')">Детям</a></li>
               					<li><a href="#" v-on:click = "changeCategory('Работа')">Работа</a></li>
               					<li><a href="#" v-on:click = "changeCategory('Животные')">Животные</a></li>
               					<li><a href="#" v-on:click = "changeCategory('Транспорт')">Транспорт</a></li>
               					<li><a href="#" v-on:click = "changeCategory('Недвижимость')">Недвижимость</a></li>
           					</ul>
        				</li>
    				</ul>
				</div>

					
				

				<div class='cssmenu'>
  					<ul>
     					<categories></categories>	
  					</ul>
				</div>	


				<div class="cssmenu_for_adaptive">

					
				</div>


				<div class="search_button">
					<button>
						<img src="images/5.png" width="15%" alt="">
						Поиск
					</button>
				</div>
					
		
			</div>
		</form>	
			
	</div>
</div>