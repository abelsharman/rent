Vue.component('categories', {
  	data: function () {
    	return {
    		pp: "Весь Казахстан",
      		obl: [	{obla: 'Акмолинская область', city: ['Абай', 'Акколь', 'Аксай', 'Аксу', 'Атбасар', 'Державинск', 'Ерейментау', 'Есиль', 'Кокшетау', 'Макинск', 'Нур-Султан(Астана)']}, 
			{obla: 'Актюбинская область', city: ['Актобе', 'Алга', 'Эмба', 'Хромтау', 'Кандыагаш', 'Шалкар', 'Темир', 'Жем']}, 
			{obla:'Алматинская область', city: ['Алматы', 'Есик', 'Капчагай', 'Каскелен', 'Сарканд', 'Талдыкорган', 'Талгар', 'Текели', 'Ушарал']}, 
			{obla: 'Атырауская область', city: ['Атырау', 'Кульсары']}, 
					{obla: 'Восточно-Казахстанская область', city: ['Аягоз', 'Курчатов', 'Риддер', 'Сатпаев', 'Семей', 'Серебрянск']}, 
					{obla: 'Жамбылская область', city: ['Каратай', 'Шу', 'Тараз', 'Жанатас']}, 
					{obla: 'Западно-Казахстанская область', city: ['Актау', 'Уральск']}, 
					{obla:'Карагандинская область', city:['Атасу', 'Балхаш', 'Байконур', 'Караганда', 'Каражал', 'Каркаралинск', 'Приозерск', 'Сарань', 'Шахтинск', 'Темиртау', 'Жезказган']}, 
					{obla: 'Костанайская область', city: ['Аркалык', 'Костанай', 'Лисаковск', 'Рудный', 'Житикара']}, 
					{obla: 'Кызылординская область', city: ['Аральск', 'Казалинск', 'Кызылорда']}, 
					{obla: 'Мангистауская область', city: ['Форт-Шевченко', 'Жанаозен']}, 
					{obla: 'Павлодарская область', city: ['Экибастуз', 'Павлодар']}, 
					{obla:'Северо-Казахстанская область', city: ['Булаево', 'Мамлютка', 'Петропавловск', 'Тайынша']},
					{obla:'Туркестанская область', city: ['Кентау', 'Ленгер', 'Шардара', 'Шымкент', 'Туркестан', 'Жетысай']}
				]
    	}
	},
    
  template: `<li class='has-sub aaaaaa'>
     			<a href='#' style="font-size: 1.1em;">{{ pp }}</a>
        		<ul>
        			<a href="#"  v-on:click = "pp = 'Весь Казахстан'">Весь Казахстан</a>
           			<li v-for='i in obl' class='has-sub aga'>
           				<a href='#' v-on:click = "pp = i.obla">{{ i.obla }}</a>
              			<ul>
                 			<li v-for="item in i.city">
                 				<a class="order2" v-on:click = "pp = item" href='#'>{{ item }}</a>
                 			</li>
              			</ul>
           			</li>
        		</ul>
     		</li>
     		`
})
const app = new Vue({
	el: "#app",
	data: {
		show: false,
		transitionButton: "position: absolute;transform: rotate(0deg); transition:transform 1s;transform 1s; left: 5%;",
		newStyle:"",
		styleCSS: "",
		pp: "Весь Казахстан",
		category: 'Все категории'
	},
	methods:{
		changeStyle: function() {
			this.show=!(this.show)
			if(this.show==true){
				this.newStyle="notmenu"
				this.transitionButton =  "transform: rotate(90deg); transition:transform 0.7s; left: 5%;"
				this.styleCSS= "displayLine1"
			}
			else{
				this.newStyle="menu"
				this.transitionButton =  "transform: rotate(0deg); transition:transform 0.7s;left: 5%"
				this.styleCSS= "displayLine2"
			}
		},
		changeCategories: function() {
			if(this.newStyle == "" || this.newStyle == 'menu') {
				if(event.target.id == 'searchpage'){
					document.getElementById('three').style.display = 'block';
					document.getElementById('login1').style.display = 'none';
					document.getElementById('tel').style.display = 'none';
					document.getElementById('four').style.display = 'none';
				}
				else if(event.target.id == 'mainpage'){
   					document.getElementById("three").style.display = 'none';
   					document.getElementById('tel').style.display = 'block';
   					document.getElementById('login1').style.display = 'none';
   					document.getElementById('four').style.display = 'block';
				}
				else if(event.target.id == 'cabpage'){
   					document.getElementById("three").style.display = 'none'
   					document.getElementById('tel').style.display = 'none';
    				document.getElementById('login1').style.display = 'block';
    				document.getElementById('four').style.display = 'none';
    				
				}
			}	
		},
		changeCategoriesRegistration: function() {
			if(this.newStyle == "" || this.newStyle == 'menu') {
				if(event.target.id == 'searchpage'){
					document.getElementById('three').style.display = 'block';
					document.getElementById('login1').style.display = 'none';
					document.querySelector("main").style.display = 'none';
				}
				else if(event.target.id == 'mainpage'){
   					document.getElementById("three").style.display = 'none';
   					document.getElementById('login1').style.display = 'none';
   					document.querySelector("main").style.display = 'block';
				}
				else if(event.target.id == 'cabpage'){
   					document.getElementById("three").style.display = 'none'
    				document.getElementById('login1').style.display = 'block';
    				document.querySelector("main").style.display = 'none';
    				
				}
			}	
		},
		changeName: function(arg){
			this.pp = arg
		},
		
		changeCategory: function(arg) {
			this.category = arg
		},
		changeNameCat: function() {
			this.pp = event.target.innerHTML
		},
		moveToLogin: function() {
			if (window.matchMedia("(max-width: 440px)").matches){
				document.getElementById('login1').style.display = 'block';
      			this.styleCSS= "displayLine2";
      			this.newStyle="menu";
      			document.getElementById("searchpage").style.backgroundColor = 'grey';
    			document.getElementById('mainpage').style.backgroundColor = 'grey';
    			document.getElementById('cabpage').style.backgroundColor = '#000';

			}
		}
	}

}); 
