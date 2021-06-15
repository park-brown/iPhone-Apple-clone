import React from 'react';
import { Grid } from '@material-ui/core';
import AppHeader from '../components/appBar/Appbar';
import ProductNavbar from '../components/productNav/ProductNavbar';
const Home = () => {
	return (
		<React.Fragment>
			<AppHeader />
			<ProductNavbar />
		</React.Fragment>
	);
};

export default Home;
