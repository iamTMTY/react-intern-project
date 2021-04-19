import React from "react";

export default function SelectCurrency() {
	return (
		<div className="select-currency">
			<form>
				<label> Select Currency : </label>
				<div className="currency_amount">
					<select>
						<option>NGN</option>
						<option>USD</option>
						<option>ZAR</option>
						<option>AFYA</option>
					</select>
					<input name="amount" type="number" step="0.1" placeholder="0.00000001" />
				</div>
				<input type="submit" name="send" value="send" />
				<input type="submit" name="recieve" value="recieve" />
			</form>
		</div>
	);
}
