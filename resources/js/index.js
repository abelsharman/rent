'use strict';


$(document).ready(function(){
        $(".dropdown").click(function(){
            $(this).find(".dropdown-menu").slideToggle("fast");
        });
    });
$(document).on("click", function(event){
  var $trigger = $(".dropdown");
  if($trigger !== event.target && !$trigger.has(event.target).length){
    $(".dropdown-menu").slideUp("fast");
  }            
});


function vision(){
  var x = document.getElementById("check");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function mainpage(){
   window.location.href = 'index.html';
}
var g = window.matchMedia("(max-width: 440px)");
function myFirst() {
  if (!(g.matches)){
    document.getElementById('login1').style.display = "inline";
    document.querySelector("header").style.opacity = "0.4";
    document.getElementById('mai').style.opacity = "0.4";
    document.querySelector("main").style.opacity = "0.4";
   }
}

function second() {
  if (!(g.matches)){
    if (document.getElementById('login1').style.display == "inline") {
      document.getElementById('login1').style.display = "none";
      document.querySelector("header").style.opacity = "1";
      document.getElementById('mai').style.opacity = "1"; 
      document.querySelector("main").style.opacity = "1";
    }
  }
        
}



var lists = ['searchpage', 'mainpage', 'cabpage'];


function third() {
  let i = 0;
  for (i; i < 3; i++) {
    if(event.target.id == lists[i]){ 
      if(event.target.style.backgroundColor == '#000'){
        event.target.style.backgroundColor = 'grey';
      }
      else{
        event.target.style.backgroundColor = '#000';
      }
    }
    else{
      document.getElementById(lists[i]).style.backgroundColor = 'grey';
    } 
}}
var city = {
  'Акмолинская область': ['Абай', 'Акколь', 'Аксай', 'Аксу', 'Атбасар', 'Державинск', 'Ерейментау', 'Есиль', 'Кокшетау', 'Макинск', 'Нур-Султан(Астана)'],
  'Актюбинская область': ['Актобе', 'Алга', 'Эмба', 'Хромтау', 'Кандыагаш', 'Шалкар', 'Темир', 'Жем'],
  'Алматинская область': ['Алматы', 'Есик', 'Капчагай', 'Каскелен', 'Сарканд', 'Талдыкорган', 'Талгар', 'Текели', 'Ушарал'],
  'Атырауская область': ['Атырау', 'Кульсары'],
  'Восточно-Казахстанская область': ['Аягоз', 'Курчатов', 'Риддер', 'Сатпаев', 'Семей', 'Серебрянск'],
  'Жамбылская область': ['Каратай', 'Шу', 'Тараз', 'Жанатас'], 
  'Западно-Казахстанская': ['Актау', 'Уральск'],
  'Карагандинская область': ['Атасу', 'Балхаш', 'Байконур', 'Караганда', 'Каражал', 'Каркаралинск', 'Приозерск', 'Сарань', 'Шахтинск', 'Темиртау', 'Жезказган'],
  'Костанайская область': ['Аркалык', 'Костанай', 'Лисаковск', 'Рудный', 'Житикара'],
  'Кызылординская область': ['Аральск', 'Казалинск', 'Кызылорда'],
  'Мангистауская область': ['Форт-Шевченко', 'Жанаозен'],
  'Павлодарская область': ['Экибастуз', 'Павлодар'],
  'Северо-Казахстанская область':  ['Булаево', 'Мамлютка', 'Петропавловск', 'Тайынша'], 
  'Туркестанская область': ['Кентау', 'Ленгер', 'Шардара', 'Шымкент', 'Туркестан', 'Жетысай']
};

function fourth() {
  let cit = document.getElementById('okno_city');
  for (let i in city){
    if (event.target.text == i) {
      cit.style.display = 'block';
      for(let j = 0; j < city[i].length; j++){
        cit.firstChild.childNodes[j*2].firstChild.innerHTML = city[i][j];
      }
  
    }
  }
}


function exit() {
  event.target.parentNode.style.display = 'none';
}


function sixth() {
  for(let i = 0; i < 18; i++) {
    if ((i == 0) || (i%2 == 0)) {
      if (event.target.parentNode.childNodes[i].style.color == 'rgb(240, 185, 60)') {
        event.target.parentNode.childNodes[i].style.color = 'white'
      }
    }
  }
  event.target.style.color = 'rgb(240,185, 60)';

}


















