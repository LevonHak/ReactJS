

function MyForm({onChange, handleLogin}) {


	return (
		<div>
			<form >
				<input name="email" onInput={onChange}/>
				<input name="password" type="password" onInput={onChange}/>
				<input name="remember" type="checkbox" onChange={onChange}/>
				<button onClick={handleLogin}>Log In</button>
			</form>
		</div>
	);
}

export default MyForm;




			