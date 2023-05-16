import { React, useState, useEffect } from "react";



function App() {

	 const [info, setInfo] = useState([])
	

	useEffect(() => {
		fetch('https://api.github.com/users').then(resopnce => resopnce.json()).then(setInfo)
	}, [])

	useEffect(() => {

	}, [])

  return (
		<>
		<div>
			{
				info.map(item =><div key={item.id}>
						<p>{item.id} <br /> {item.login} <br /></p>
						<img src={item.avatar_url} alt=""/>
					</div>
				)
			}
		</div>
		</>
  );
}

export default App;


