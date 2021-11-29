<body>
  <img id="player" src="https://media.tenor.com/images/0791eb3858075aca85eed5ecfe08c778/tenor.gif" alt="">
  <img id="coin" src="https://myrealdomain.com/images/gold-coin-gif-1.gif" alt="">
  <script src="app.js"></script>
</body>







img {
	width: 100px;
	position: absolute;
	top: 100px;
	left: 10px;
}









function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
