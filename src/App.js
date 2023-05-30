import React, { useState, useRef } from 'react';

	
	function App() {

		const [count, setCount] = useState(0)
		const testRef = useRef(null);

		function changeTest(){
			testRef.current.value = Number(testRef.current.value) + 1;
		}

			return (
				<div>
					 	<input type="text" ref={testRef}/>
						<button onClick={changeTest}>Change Test</button>
						<button onClick={() => {setCount(count + 1); console.log(count)}}>Change Count</button>
				</div>
			);
		}

		export default App;
