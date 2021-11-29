<body>
  <input name="creditCard" type="text" placeholder="credit card" id="cc">
  <label>
    I agree to sell my soul to your company
    <input name="agreeToTerms" type="checkbox" id="terms">
  </label>
  <select name="selectedVeggie" id="veggie">
    <option value="eggplant">Eggplant</option>
    <option value="asparagus">Asparagus</option>
    <option value="carrot">Carrot</option>
  </select>
  <script src=" app.js"></script>
</body>










const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');
const formData = {};
// ONE callback works for any number of inputs!!
for (let input of [ creditCardInput, termsCheckbox, veggieSelect ]) {
	input.addEventListener('input', ({ target }) => {
		const { name, type, value, checked } = target;
		formData[name] = type === 'checkbox' ? checked : value;
		console.log(formData);
	});
}

//We could use hard-coded callbacks:
// creditCardInput.addEventListener('input', (e) => {
// 	console.log('CC CHANGED!', e);
// 	formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
// 	console.log('VEGGIE!', e);
// 	formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
// 	console.log('CHECKBOX', e);
// 	formData['agreeToTerms'] = e.target.checked;
// });
