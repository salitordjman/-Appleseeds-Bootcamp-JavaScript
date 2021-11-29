<body>
  <form id="signup-form" action="/NOOOO" method="get">
    <input type="text" placeholder="credit card" id="cc">
    <label>
      I agree to sell my soul to your company
      <input type="checkbox" id="terms">
    </label>
    <select name="" id="veggie">
      <option value="eggplant">Eggplant</option>
      <option value="asparagus">Asparagus</option>
      <option value="carrot">Carrot</option>
    </select>
    <input type="submit">
  </form>
  <script src=" app.js"></script>
</body>
















const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function(e) {
	e.preventDefault(); //stops the request from being sent (prevents page reload)
	console.log('cc', creditCardInput.value);
	console.log('terms', termsCheckbox.checked);
	console.log('veggieSelect', veggieSelect.value);
	//send form data to db
	//append something to page using form data
});
