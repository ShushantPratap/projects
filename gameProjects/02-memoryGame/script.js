let container = document.querySelector(".container");
let time = document.querySelector(".time h2");
let startBtn = document.querySelector(".time button");
let timeoutId = null,
sec = 0,
min = 0;
function timeStart(start){
	if(start){
		startBtn.disabled;
		startBtn.style.display="none";
		app();
	}
	timeoutId = setTimeout(()=>{
		sec = parseInt(sec);
		min = parseInt(min);
		sec++;
		if(sec==60){
			sec=0;
			min = min+1;
		}
		sec<10 ? sec=`0${sec}`: sec=sec;
		min<10 ? min=`0${min}`: min=min;
		time.innerHTML=`${min} : ${sec}`;
        timeStart();
    },1000);
}
function timeStop(){
    clearTimeout(timeoutId);
}

function app(){
	let random = Math.floor(Math.random()*10);
	let flipCard;
	if(random==3){
		flipCard = ["https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig",
			"https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig"
		];
	}else if(random == 1){
		flipCard = ["https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig",
			"https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig"
		];
	}else if(random == 2){
		flipCard = ["https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig",
			"https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig"
		];
	}else if(random == 0){
		flipCard = ["https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Guava","https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig",
			"https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig"
		];
	}else if(random == 4){
		flipCard = ["https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear",
			"https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig",
			"https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Mango"
		];
	}else if(random == 5){
		flipCard = ["https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig",
			"https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig"
		];
	}else if(random == 6){
		flipCard = ["https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig",
			"https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig"
		];
	}else if(random == 7){
		flipCard = ["https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig",
			"https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig"
		];
	}else if(random == 8){
		flipCard = ["https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig",
			"https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig"
		];
	}else if(random == 9){
		flipCard = ["https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig",
			"https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Apple", "https://placehold.co/400x250/F8F8F8/333333?text=Mango", "https://placehold.co/400x250/F8F8F8/333333?text=Guava", "https://placehold.co/400x250/F8F8F8/333333?text=Grapes", "https://placehold.co/400x250/F8F8F8/333333?text=Lichi", "https://placehold.co/400x250/F8F8F8/333333?text=Kiwi", "https://placehold.co/400x250/F8F8F8/333333?text=Banana", "https://placehold.co/400x250/F8F8F8/333333?text=Strawberry", "https://placehold.co/400x250/F8F8F8/333333?text=Cherry", "https://placehold.co/400x250/F8F8F8/333333?text=Plum", "https://placehold.co/400x250/F8F8F8/333333?text=Pear", "https://placehold.co/400x250/F8F8F8/333333?text=Lemon", "https://placehold.co/400x250/F8F8F8/333333?text=Coconut", "https://placehold.co/400x250/F8F8F8/333333?text=Papaya", "https://placehold.co/400x250/F8F8F8/333333?text=Avocados", "https://placehold.co/400x250/F8F8F8/333333?text=Fig"
		];
	}

	let array = [];
	for (let i=0; i<flipCard.length; i++) {
		let btnEl = document.createElement("button"),
		childEl = btnEl.insertAdjacentElement("beforeend", document.createElement("div")),
		imgEl = childEl.insertAdjacentElement("beforeend", document.createElement("img"));
		btnEl.classList.add("card");
		childEl.classList.add("back");
		imgEl.setAttribute("src", flipCard[i]);

		btnEl.onclick=()=>{
			if(btnEl.className=="card cardActive"){
				array.pop();
				btnEl.classList.remove("cardActive");
			}else if(btnEl.className=="card"){
				btnEl.classList.add("cardActive");
				array.push(imgEl.src);
				if(array.length%2==0){
					if(array[array.length-2]==array[array.length-1]){
						match(childEl.innerHTML, false);
					}else{
						match(array[array.length-2], array[array.length-1]);
						array.pop();
						array.pop();
					}
				}
			}
			if(array.length==flipCard.length){
				timeStop();
				let x = document.createElement("h1");
				x.innerHTML="You are Winner";
				x.classList.add("win")
				let z = document.body.firstElementChild;
				z.insertAdjacentElement("afterend", x);
			}
		}
		container.insertAdjacentElement("beforeend", btnEl);
	}

	function match(value, value1){
		container.querySelectorAll(".card").forEach(element =>{
			let match=(element.firstElementChild.innerHTML==value);
			let x=element.firstElementChild.firstElementChild.src;
			if(match){
				element.disabled = true;
				element.classList.add("match");
			}
			if(x==value||x==value1){
				setTimeout(()=>{
					element.classList.remove("cardActive");
				},1000);
			}
		});
	}
}