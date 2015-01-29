var country = "Sri Lanka";
var weather;
var food;
var currency;

if(country == "Sri Lanka")
{
	weather = "Either too hot or too rainy";
	food = "Hoppers";
	currency = "Sri Lankan Rupee";
}
else if(country == "Maldives")
{
	weather = "Too much rain with some sun";
	food = "Sour. So sour";
	currency = "Maldivian Ruffiya";
}
else if(country == "India")
{
	weather = "Hot. So Hot";
	food = "Buriyani!";
	currency = "Indian Rupee";
}

	message = "This is "+country+" where the national food is "+food+" and the weather is "+weather+". The currency is:"+currency+".";
	alert(message);
