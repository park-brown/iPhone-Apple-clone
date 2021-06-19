import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { styled } from '@material-ui/core/styles';

const Section = styled(Grid, { name: 'section-retail' })(({ theme }) => ({
	paddingTop: '62px',
	width: '100%',
	textAlign: 'center',
	overflow: 'hidden',
	[theme.breakpoints.up('tablet')]: {
		paddingTop: '110px'
	}
}));
const SectionCotentWrapper = styled(Box, { name: 'section-content-wrapper' })(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: 0,
	width: '100%',
	flexWrap: 'wrap',
	height: 'auto',
	[theme.breakpoints.up('tablet')]: {
		maxWidth: '776px',
		padding: '0px 20px',
		flexDirection: 'row',
		margin: '0 auto'
	},
	[theme.breakpoints.up('laptop')]: {
		padding: '0 30px',
		maxWidth: '1440px'
	}
}));
const ContentItem = styled(Box, { name: 'section-flex-item' })(({ theme, mobile, tablet }) => ({
	flexGrow: mobile,
	flexBasis: `calc(50% * ${mobile})`, //full-screen width 2; half screen 1
	textAlign: 'center',
	[theme.breakpoints.up('tablet')]: {
		flexGrow: tablet,
		flexBasis: `calc(50% * ${tablet})`
	}
}));
const ContentItemInner = styled(Box, { name: 'section-flex-item-inner' })(({ theme }) => ({
	backgroundColor: '#fff',
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
}));
const FootNote = styled('sup', { name: 'section-footnote' })(({ theme }) => ({
	fontSize: '0.9em',
	top: '-0.09em',
	position: 'relative',
	verticalAlign: 'baseline',
	fontFeatureSettings: `'numr'`
}));
export const BreakLine = styled('br', { name: 'breakline' })(({ theme, mobile, tablet, laptop }) => ({
	display: `${mobile === 'show' ? 'block' : 'none'}`,
	[theme.breakpoints.up('tablet')]: {
		display: `${tablet === 'show' ? 'block' : 'none'}`
	},
	[theme.breakpoints.up('laptop')]: {
		display: `${laptop === 'show' ? 'block' : 'none'}`
	}
}));
const ServiceProviderWrapper = styled(Box, { name: 'service-provider-box' })(({ theme }) => ({
	marginBottom: '34px',
	maxWidth: '50%',
	width: '50%',

	[theme.breakpoints.up('tablet')]: {
		marginBottom: '55px',
		maxWidth: '240px'
	},
	[theme.breakpoints.up('laptop')]: {
		maxWidth: '270px',
		marginBottom: '0px'
	}
}));
const ServiceProviderLogo = styled('figure', { name: 'service-provider-logo' })(
	({ theme, logo: { url, width, height, marginLeft, backgroundSize, backgroundPosition, position, left } }) => ({
		position: position.mobile,
		left: left.mobile,
		marginLeft: marginLeft.mobile,
		backgroundImage: url.mobile,
		width: width.mobile,
		height: height.mobile,
		backgroundSize: backgroundSize.mobile,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: backgroundPosition.mobile || 'center',
		[theme.breakpoints.up('tablet')]: {
			position: position.tablet,
			left: left.tablet,
			backgroundImage: url.tablet,
			width: width.tablet,
			height: height.tablet,
			backgroundSize: backgroundSize.tablet,
			marginLeft: marginLeft.tablet,
			backgroundPosition: backgroundPosition.tablet || 'center'
		},
		[theme.breakpoints.up('laptop')]: {
			position: position.laptop,
			left: left.laptop,
			backgroundImage: url.laptop,
			width: width.laptop,
			height: height.laptop,
			backgroundSize: backgroundSize.laptop,
			marginLeft: marginLeft.laptop,
			backgroundPosition: backgroundPosition.laptop || 'center'
		}
	})
);
const FindYourOfferButton = styled(Button, { name: 'find-your-offer-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.button,
		padding: '18px 31px',
		borderRadius: '980px',
		color: '#fff',
		backgroundColor: theme.palette.common.ribbon_background_color_initial,
		marginBottom: '52px',
		'&:hover': {
			backgroundColor: theme.palette.common.button_hover
		}
	}
}));
const TradeInImage = styled('figure', { name: 'trade-in-image' })(({ theme }) => ({
	margin: '28px 0 0 -223px',
	position: 'relative',
	left: '50%',
	top: '-15px',
	backgroundImage: 'url(./retail_section/trade_in_small_2x.jpg)',
	backgroundSize: 'cover',
	width: '446px',
	height: '201px',
	backgroundRepeat: 'no-repeat',
	[theme.breakpoints.up('tablet')]: {
		top: '0px',
		backgroundImage: 'url(./retail_section/trade_in_medium_2x.jpg)',
		margin: '24px 0 0 -179px',
		width: '358px',
		height: '176px'
	},
	[theme.breakpoints.up('laptop')]: {
		top: '48px',
		backgroundImage: 'url(./retail_section/trade_in_large_2x.jpg)',
		margin: '0 0 9px -337.5px',
		width: '675px',
		height: '362px'
	}
}));
const UpgradeImage = styled('figure', { name: 'upgrade-iamge' })(({ theme }) => ({
	margin: '72px 0 0 -270px',
	position: 'relative',
	left: '50%',
	backgroundImage: 'url(./retail_section/iphone_upgrade_program_small_2x.jpg)',
	backgroundSize: 'cover',
	width: '540px',
	height: '146px',
	backgroundRepeat: 'no-repeat',
	[theme.breakpoints.up('tablet')]: {
		backgroundImage: 'url(./retail_section/iphone_upgrade_program_medium_2x.jpg)',
		margin: '47px 0 0 -179.5px',
		width: '359px',
		height: '139px'
	},
	[theme.breakpoints.up('laptop')]: {
		backgroundImage: 'url(./retail_section/iphone_upgrade_program_large_2x.jpg)',
		margin: '55px 0 0 -337.5px',
		width: '675px',
		height: '261px'
	}
}));
const service_provider_description = [
	{
		//AT&T
		logo: {
			url: {
				mobile: 'url(./retail_section/logo_att_small_2x.jpg)',
				tablet: 'url(./retail_section/logo_att_large_2x.jpg)'
			},
			width: { mobile: '102px', tablet: '126px' },
			height: { mobile: '43px', tablet: '61px' },
			marginLeft: { mobile: '-51px', tablet: '-63px' },
			backgroundSize: { mobile: 'cover', tablet: '126px 53px' },
			backgroundPosition: { mobile: 'center', tablet: 'center' },
			position: {
				mobile: 'relative',
				tablet: 'relative',
				laptop: 'relative'
			},
			left: {
				mobile: '50%',
				tablet: '50%',
				laptop: '50%'
			}
		},
		text: 'Save up to $700'
	},
	//T_Mobile_Sprint
	{
		logo: {
			url: {
				mobile: 'url(./retail_section/logo_t_mobile_sprint_small_2x.jpg)',
				tablet: 'url(./retail_section/logo_t_mobile_sprint_large_2x.jpg)'
			},
			width: { mobile: '208px', tablet: '219px' },
			height: { mobile: '43px', tablet: '61px' },
			marginLeft: { mobile: '-104px', tablet: '-109.5px' },
			backgroundSize: { mobile: 'cover', tablet: 'cover' },
			backgroundPosition: { mobile: 'center', tablet: 'center' },
			position: {
				mobile: 'relative',
				tablet: 'relative',
				laptop: 'relative'
			},
			left: {
				mobile: '50%',
				tablet: '50%',
				laptop: '50%'
			}
		},
		text: 'Save up to $330'
	},
	//Verizon
	{
		logo: {
			url: {
				mobile: 'url(./retail_section/logo_verizon_small_2x.jpg)',
				tablet: 'url(./retail_section/logo_verizon_large_2x.jpg)'
			},
			width: { mobile: '102px', tablet: '119px' },
			height: { mobile: '23px', tablet: '61px' },
			marginLeft: { mobile: '-51px', tablet: '-59.5px' },
			backgroundSize: { mobile: 'cover', tablet: '119px 53px' },
			backgroundPosition: { mobile: 'center', tablet: 'center' },
			position: {
				mobile: 'relative',
				tablet: 'relative',
				laptop: 'relative'
			},
			left: {
				mobile: '50%',
				tablet: '50%',
				laptop: '50%'
			}
		},
		text: 'Save up to $700'
	}
];
const apple_card_description = [
	{
		logo: {
			url: {
				mobile: 'url(./retail_section/apple_card_small_2x.jpg)',
				tablet: 'url(./retail_section/apple_card_medium_2x.jpg)',
				laptop: 'url(./retail_section/apple_card_large_2x.jpg)'
			},
			width: {
				mobile: 'auto',
				tablet: 'auto',
				laptop: '110%'
			},
			height: {
				mobile: '188px',
				tablet: '250px',
				laptop: '357px'
			},
			marginLeft: {
				mobile: '-174.5px',
				tablet: '-232.5px',
				laptop: '0px'
			},
			backgroundPosition: {
				mobile: 'unset',
				tablet: 'unset',
				laptop: 'right center'
			},
			backgroundSize: {
				mobile: '349px 188px',
				tablet: '465px 250px',
				laptop: '644px 457px'
			},
			position: {
				mobile: 'relative',
				tablet: 'relative',
				laptop: 'relative'
			},
			left: {
				mobile: '50%',
				tablet: '50%',
				laptop: '0%'
			}
		}
	}
];
const RetailSection = () => {
	const LearnMore = (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: 'common.link',
				mt: { mobile: '13px' }
			}}>
			<Typography variant='body_reduced'>Learn more</Typography>
			<ArrowForwardIosIcon sx={{ width: '10px', height: '16px', ml: '6px' }} />
		</Box>
	);
	return (
		<Section component='section'>
			<Typography variant='section_headline' component='h2'>
				Ways to Buy iPhone
			</Typography>
			<SectionCotentWrapper>
				<ContentItem
					sx={{
						mt: { mobile: '44px', tablet: '61px', laptop: '70px' },
						mb: { mobile: '15px', tablet: '20px', laptop: '30px' }
					}}
					mobile={2}
					tablet={2}>
					<ContentItemInner sx={{ p: { mobile: '45px 0 44px', tablet: '60px 22px 59px', laptop: '95px 45px 59px' } }}>
						{/*Headline wrapper */}
						<Box sx={{ mb: { mobile: '38px', tablet: '48px', laptop: '35px' } }}>
							<Typography variant='eyebrow' component='h3' sx={{ mb: '9.6px' }}>
								The latest carrier deals. <BreakLine mobile='show' />
								<Typography sx={{ color: '#008009' }} variant='eyebrow' component='span'>
									Directly from Apple.
								</Typography>
							</Typography>
							<Typography variant='tile_headline' component='p' sx={{ mt: '13px' }}>
								Save up to $700 on
								<BreakLine mobile='show' tablet='none' /> the newest
								<BreakLine tablet='show' /> iPhone
								<BreakLine mobile='show' tablet='none' /> after trade‑in. <FootNote>5</FootNote>
							</Typography>
						</Box>
						{/*Service Provider container */}
						<Box
							sx={{
								display: 'flex',
								flexDirection: { mobile: 'column', tablet: 'row' },
								alignItems: 'center',
								justifyContent: 'space-around',
								width: '100%',
								flexWrap: 'wrap',
								maxWidth: '1078px'
							}}>
							{service_provider_description.map(({ logo, text }) => (
								<ServiceProviderWrapper key={logo.url.mobile}>
									<ServiceProviderLogo logo={logo} />
									<Typography
										variant='tile_copy'
										component='p'
										sx={{ mt: { mobile: '21px', tablet: '26px', laptop: '22px' }, color: 'grey.700' }}>
										{text}
									</Typography>
								</ServiceProviderWrapper>
							))}
						</Box>
						{/*Call To Action container */}
						<Box
							sx={{
								mt: { mobile: '38px', tablet: '48px', laptop: '60px' },
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								width: '100%'
							}}>
							<FindYourOfferButton>find your offer</FindYourOfferButton>
							<Typography variant='body' component='p'>
								Our Specialists can help you
								<BreakLine mobile='show' />
								shop — online or in store.
								<BreakLine mobile='show' tablet='show' laptop='none' />
								<Typography
									component='a'
									color='common.link'
									sx={{ '&:hover,&:active': { textDecoration: 'underline' } }}>
									Chat with an iPhone Specialist
								</Typography>
							</Typography>
						</Box>
					</ContentItemInner>
				</ContentItem>
				<ContentItem
					sx={{
						mb: { mobile: '15px', tablet: '20px', laptop: '30px', backgroundColor: '#fff' }
					}}
					mobile={2}
					tablet={2}>
					<Box
						sx={{
							p: { mobile: '50px 6.25%', tablet: '49px 38px', laptop: '83px 0' },
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							flexWrap: 'wrap'
						}}>
						{/*image wrapper */}
						<Box
							sx={{
								flexBasis: { mobile: '100%', tablet: '75%', laptop: '50%' },
								maxWidth: { mobile: '100%', tablet: '75%', laptop: '50%' },
								order: { mobile: 2, tablet: 2, laptop: 1 }
							}}>
							{apple_card_description.map(({ logo }) => (
								<ServiceProviderLogo key={logo.url.mobile} logo={logo} />
							))}
						</Box>
						{/*text container */}
						<Box
							sx={{
								flexBasis: { mobile: '100%', tablet: '75%', laptop: '50%' },
								maxWidth: { mobile: '100%', tablet: '75%', laptop: '50%' },
								order: { mobile: 1, tablet: 1, laptop: 2 },
								mx: 'auto',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								position: 'relative',
								pl: { laptop: '3%' }
							}}>
							{/*text wrapper */}
							<Box
								sx={{
									maxWidth: { mobile: '315px', tablet: '580px', laptop: '516px' },
									mb: { mobile: '37px', tablet: '30px', laptop: '0px' },
									width: '100%'
								}}>
								<Typography variant='tile_headline' component='h3'>
									Get 3% Daily Cash
									<BreakLine mobile='show' tablet='show' /> back with Apple Card.
								</Typography>
								<Typography component='p' variant='tile_copy' sx={{ mt: { mobile: '18px' }, color: 'grey.700' }}>
									And pay for your new iPhone <BreakLine mobile='show' />
									over 24 months, interest‑free when
									<BreakLine mobile='show' tablet='show' />
									you choose to check out
									<BreakLine laptop='show' /> with <BreakLine mobile='show' />
									Apple Card Monthly Installments.
								</Typography>
								{LearnMore}
							</Box>
						</Box>
					</Box>
				</ContentItem>

				<ContentItem
					mobile={2}
					tablet={1}
					sx={{
						width: '100%',
						mb: { mobile: '15px', tablet: '20px' },
						pr: { mobile: 0, tablet: '10px' },
						textAlign: 'center'
					}}>
					<Box
						sx={{
							width: '100%',
							minHeight: '520px',
							backgroundColor: '#fff',
							p: { mobile: '14px 6.25% 0', tablet: '0 27px', laptop: '0 40px' },
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							overflow: 'hidden'
						}}>
						{/*text container */}
						<Box sx={{ width: '100%', maxWidth: { mobile: '340px', tablet: '290px', laptop: '455px' }, mx: 'auto' }}>
							<Typography
								variant='tile_headline'
								component='h3'
								sx={{ mt: { mobile: '46px', tablet: '49px', laptop: '52px' } }}>
								Trade in your smartphone for <BreakLine tablet='show' /> credit.
							</Typography>
							<Typography
								variant='tile_copy'
								component='p'
								sx={{ color: 'grey.700', mt: { mobile: '20px', tablet: '17px', laptop: '25px' } }}>
								With Apple Trade In, you can get <BreakLine tablet='show' /> credit
								<BreakLine mobile='show' /> toward a new iPhone when you trade in <BreakLine mobile='show' />
								an eligible smartphone.
								<BreakLine mobile='show' tablet='show' />
								It’s good for you and the planet.
							</Typography>
							{LearnMore}
						</Box>
						{/*image wrapper */}
						<TradeInImage />
					</Box>
				</ContentItem>
				<ContentItem
					mobile={2}
					tablet={1}
					sx={{
						mb: { mobile: '15px', tablet: '20px' },
						pl: { mobile: 0, tablet: '10px' },
						textAlign: 'center'
					}}>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							minHeight: '520px',
							backgroundColor: '#fff',
							p: { mobile: '14px 6.25% 0', tablet: '0 27px', laptop: '0 40px' },
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							overflow: 'hidden'
						}}>
						{/*text container */}
						<Box sx={{ width: '100%', maxWidth: { mobile: '340px', tablet: '290px', laptop: '455px' }, mx: 'auto' }}>
							<Typography
								variant='tile_headline'
								component='h3'
								sx={{ mt: { mobile: '46px', tablet: '49px', laptop: '52px' } }}>
								The easiest way <BreakLine mobile='show' tablet='show' />
								to upgrade to the <BreakLine mobile='show' /> latest iPhone.
							</Typography>
							<Typography
								variant='tile_copy'
								component='p'
								sx={{ color: 'grey.700', mt: { mobile: '20px', tablet: '17px', laptop: '25px' } }}>
								Join the iPhone Upgrade <BreakLine mobile='show' /> Program <BreakLine tablet='show' />
								to get the latest iPhone <BreakLine mobile='show' /> every year, <BreakLine tablet='show' />
								low monthly <BreakLine mobile='show' /> payments, and AppleCare+.
							</Typography>
							{LearnMore}
						</Box>
						{/*image wrapper */}
						<UpgradeImage />
					</Box>
				</ContentItem>
				<ContentItem
					mobile={2}
					tablet={2}
					sx={{
						backgroundColor: '#fff',
						mb: { mobile: '15px', tablet: '20px', laptop: '30px' },
						p: { mobile: 0, tablet: '124px 0 0 0', laptop: '134px 0 0 0' },
						backgroundImage: {
							mobile: '',
							tablet: 'url(./retail_section/why_apple_medium_2x.jpg)',
							laptop: 'url(./retail_section/why_apple_large_2x.jpg)'
						},
						width: { mobile: '100%', tablet: '736px', laptop: '1380px' },
						height: { mobile: '100%', tablet: '514px', laptop: '560px' },
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: { mobile: '', tablet: 'center bottom', laptop: 'center bottom' },
						zIndex: 1,
						position: 'relative'
					}}>
					<Box
						className='image-top-small'
						component='figure'
						sx={{
							position: 'relative',
							left: '50%',
							margin: '0 0 0 -367px',
							width: '734px',
							height: '315px',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundImage: 'url(./retail_section/why_apple_top_small_2x.jpg)',
							display: { mobile: 'block', tablet: 'none' },
							zIndex: 1
						}}></Box>
					<Box
						className='content-wrapper'
						sx={{
							position: 'relative',
							zIndex: 2,
							p: { mobile: '0 6.25%' },
							margin: { mobile: '-138px 0 0 0', tablet: '0' },
							width: '100%'
						}}>
						<Box className='copy-wrapper' sx={{ maxWidth: { mobile: '280px', tablet: '500px' }, mx: 'auto' }}>
							<Typography variant='tile_headline' component='h3'>
								Why Apple is <BreakLine mobile='show' />
								the best
								<BreakLine tablet='show' /> place <BreakLine mobile='show' /> to buy iPhone.
							</Typography>
							<Typography
								variant='tile_copy'
								sx={{
									color: 'grey.700',
									mx: 'auto',
									mt: { mobile: '20px', tablet: '17px', laptop: '25px' },
									maxWidth: { mobile: '280px', tablet: '375px', laptop: '460px' }
								}}
								component='p'>
								You can choose a payment option <BreakLine mobile='show' /> that works for you, pay less with a
								trade‑in, connect your new iPhone <BreakLine mobile='show' /> to your carrier, and get set up{' '}
								<BreakLine mobile='show' />
								quickly.
								<BreakLine tablet='show' /> You can also chat with a Specialist anytime.
							</Typography>
							{LearnMore}
						</Box>
					</Box>
					<Box
						className='image-bottom-small'
						component='figure'
						sx={{
							position: 'relative',
							left: '50%',
							margin: '0 0 0 -367px',
							width: '734px',
							height: '187px',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundImage: 'url(./retail_section/why_apple_bottom_small_2x.jpg)',
							display: { mobile: 'block', tablet: 'none' },
							zIndex: 1
						}}></Box>
				</ContentItem>
				<ContentItem
					mobile={2}
					tablet={2}
					sx={{
						width: { mobile: '100%', tablet: '736px', laptop: '1380px' },
						minHeight: { mobile: '620px', tablet: '514px', laptop: '560px' },
						pt: { mobile: '232px', tablet: 0 },
						display: 'flex',
						alignItems: { moile: 'flex-start', tablet: 'center' },
						justifyContent: 'center',
						backgroundImage: {
							mobile: 'url(./retail_section/ios15_preview_small_2x.jpg)',
							tablet: 'url(./retail_section/ios15_preview_medium_2x.jpg)',
							laptop: 'url(./retail_section/ios15_preview_large_2x.jpg)'
						},
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center bottom',
						backgroundColor: '#fff',
						mb: { mobile: '15px', tablet: '20px', laptop: '30px' }
					}}>
					<Box className='content-wrapper'>
						<Typography variant='tile_headline' component='h3'>
							iOS 15
						</Typography>
						<Typography
							variant='tile_copy'
							sx={{ color: 'grey.700', mt: { mobile: '13.6px', tablet: '13.6px', laptop: '16.8px' } }}
							compoent='p'>
							in touch. in the moment
						</Typography>
						{LearnMore}
					</Box>
				</ContentItem>
			</SectionCotentWrapper>
		</Section>
	);
};

export default RetailSection;
