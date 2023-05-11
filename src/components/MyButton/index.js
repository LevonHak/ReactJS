import { useEffect } from "react";


function MyButton({title, handleClick, count}) {

	useEffect(() =>{
		let interval = setInterval(() => {
			console.log('ok')
		}, 1000)


	return () => {
		clearInterval(interval)
	}
	}, [])
	
	return(
		<div>
					
				<button onClick={handleClick}>{title}</button>
		</div>
	)
}

export default MyButton;