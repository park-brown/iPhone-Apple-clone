import React from 'react';
import { Grid } from '@material-ui/core';
import AppHeader from '../components/appBar/Appbar';
import ProductNavbar from '../components/productNav/ProductNavbar';
import Offset from '../components/utili/Offset';
import Ribbon from '../components/ribbon/Ribbon';
import HeroSection from '../sections/hero/HeroSection';
import CompareSection from '../sections/compare/CompareSection';
import RetailSection from '../sections/retail/RetailSection';
import AccessoriesSection from '../sections/accessories/AccessoriesSection';
const Home = () => {
	return (
		<React.Fragment>
			<AppHeader />
			<ProductNavbar />
			<Grid container component='main' sx={{ width: '100%', flexDirection: 'column', overflow: 'hidden' }}>
				<Offset />
				<Ribbon />
				<HeroSection />
				<CompareSection />
				<RetailSection />
				<AccessoriesSection />
			</Grid>
		</React.Fragment>
	);
};

export default Home;
