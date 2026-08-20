let		count = 0;

function	increment()
{
	count++;
	console.log(count);
	document.getElementById("_count").innerText = count;
}

function	decrement()
{
	if ( count === 0 )
		return ;
	count--;
	console.log(count);
	document.getElementById("_count").innerText = count;
}
