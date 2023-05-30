import { memo } from 'react';


 const MyComponent = memo(({count}) => {

	console.log('rendering')

	return(
			<p>My Component</p>
	)
 }, (nextProps) => {
		if(nextProps.count === 5){
			return false 
		}
		return true
 })

 export default MyComponent