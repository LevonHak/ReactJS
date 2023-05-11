	import React from 'react';
	import './style.css';
	import image from './search-icon-2.png'

	function Navigation() {

		let image = require('./search-icon-2.png')

		const handleMouseOver = () => {
			const search = document.getElementById('search');
			search.style.cssText = 'display: block; border-radius: 13px; border: none; width: 0; position: absolute; margin-left: 200px; height: 20px;'

			const searchAnimation = `
					@keyframes search {
						from { width: 0; }
						to { width: 250px; }
					}
		`;

			const styleElement = document.createElement('style');
			styleElement.appendChild(document.createTextNode(searchAnimation));
			document.head.appendChild(styleElement);

			search.style.animation = 'search 0.5s forwards';
		}

		const handleMouseOut = (event) => {
			const search = document.getElementById('search');
			const closeSearchAnimation = `@keyframes closeSearch { from { width: 250px;} to { width: 0;} }`;

			const styleElement = document.createElement('style');
			styleElement.appendChild(document.createTextNode(closeSearchAnimation));
			document.head.appendChild(styleElement);

			if (event.relatedTarget === search) {
				return;
			}

			search.style.animation = 'closeSearch 0.5s forwards';

			setTimeout(() => {
				search.style.cssText = 'display: none;';
			}, 400);
			}

	return (
		<nav>
			<ul>
				<li id="logo"><a href="#">Logo</a></li>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Contact</a></li>
				<li>
					<img
						src={image}
						id="img"
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					/>
					<input type="search" id="search" />
				</li>
			</ul>
		</nav>
	);
				}

	export default Navigation;