import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { styled } from '@material-ui/core/styles';

const Section = styled(Grid, { name: 'section-compare' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',

		backgroundColor: '#fff',
		padding: '92px 0px 94px 0px',
		textAlign: 'center',
		marginBottom: '30px',
		overflow: 'hidden',
		[theme.breakpoints.up('tablet')]: {
			padding: '92px 0px 98px 0px'
		},
		[theme.breakpoints.up('laptop')]: {
			padding: '140px 0px 140px 0px'
		}
	}
}));
const SectionContent = styled(Box, { name: 'section-content-row' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '87.5%',
		justifyContent: 'flex-start',

		margin: '0 auto'
	},
	[theme.breakpoints.up('tablet')]: {
		width: '692px'
	},
	[theme.breakpoints.up('laptop')]: {
		width: '980px'
	}
}));
const CompareTable = styled(Box, { name: 'compare-table' })(({ theme }) => ({
	maxWidth: '500px',
	width: '100%',
	gap: '23px 10px',
	margin: '52px auto 0px auto',
	display: 'grid',
	gridTemplateRows: 'repeat(16,auto)',
	gridTemplateColumns: 'repeat(2,minmax(150px,1fr))', //lay out breaks at 300px
	gridTemplateAreas: `
  "iphone-12-pro-device iphone-12-device"
  "iphone-12-pro-display iphone-12-display"
  "iphone-12-pro-cellular iphone-12-cellular"
  "iphone-12-pro-chip iphone-12-chip"
  "iphone-12-pro-camera iphone-12-camera"
  "iphone-12-pro-lidar iphone-12-lidar"
  "iphone-12-pro-magsafe iphone-12-magsafe"
  "iphone-12-pro-cta iphone-12-cta"
  "iphone-se-device iphone-11-device"
  "iphone-se-display iphone-11-display"
  "iphone-se-cellular iphone-11-cellular"
  "iphone-se-chip iphone-11-chip"
  "iphone-se-camera iphone-11-camera"
  "iphone-se-lidar iphone-11-lidar"
  "iphone-se-magsafe iphone-11-magsafe"
  "iphone-se-cta iphone-11-cta"`,

	[theme.breakpoints.up('tablet')]: {
		gap: '23px 78px'
	},
	[theme.breakpoints.up('laptop')]: {
		margin: '66px auto 0px auto',
		maxWidth: '960px',
		gap: '23px 34px',
		gridTemplateColumns: 'repeat(4, 1fr)',
		gridTemplateRows: 'repeat(8,auto)',
		gridTemplateAreas: `
  "iphone-12-pro-device iphone-12-device iphone-se-device iphone-11-device"
  "iphone-12-pro-display iphone-12-display iphone-se-display iphone-11-display"
  "iphone-12-pro-cellular iphone-12-cellular iphone-se-cellular iphone-11-cellular"
  "iphone-12-pro-chip iphone-12-chip iphone-se-chip iphone-11-chip"
  "iphone-12-pro-camera iphone-12-camera iphone-se-camera iphone-11-camera"
  "iphone-12-pro-lidar iphone-12-lidar iphone-se-lidar iphone-11-lidar"
  "iphone-12-pro-magsafe iphone-12-magsafe iphone-se-magsafe iphone-11-magsafe"
  "iphone-12-pro-cta iphone-12-cta iphone-se-cta iphone-11-cta"
  `
	}
}));
const DeviceWrapper = styled(Box, { name: 'device-container' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	paddingBottom: '25px',
	borderBottom: '1px solid #d2d2d7'
}));
const ImageWrapper = styled(Box, { name: 'Image-wrapper' })(({ theme }) => ({
	minHeight: '168px',
	marginBottom: '40px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-end',
	alignItems: 'center',
	[theme.breakpoints.up('tablet')]: {
		minHeight: '256px',
		marginBottom: '42px'
	}
}));

const Image = styled('figure', { name: 'device-image' })(({ theme, image }) => ({
	[theme.breakpoints.up('mobile')]: {
		backgroundImage: image.mobile.url,
		width: image.mobile.width,
		height: image.mobile.height,
		margin: 0,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	},
	[theme.breakpoints.up('tablet')]: {
		// backgroundImage: `url("./compare_section/compare_iphone_12_pro__large_2x.jpg")`,
		backgroundImage: image.tablet.url,
		width: image.tablet.width,
		height: image.tablet.height
	}
}));
const DeviceContent = styled(Box, { name: 'device-content' })(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '100%',
	position: 'relative'
}));

const DeviceLogo = styled('figure', { name: 'device-logo' })(({ theme, logo }) => ({
	marginBottom: '4px',
	backgroundImage: logo.mobile.url,
	width: logo.mobile.width,
	height: logo.mobile.height,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	[theme.breakpoints.up('tablet')]: {
		backgroundImage: logo.tablet.url,
		width: logo.tablet.width
	}
}));
const NewBanner = styled('span', { name: 'new-tout-text' })(({ theme }) => ({
	...theme.typography.button_reduced,
	color: theme.palette.common.new,
	position: 'absolute',
	top: '-22px',
	left: '50%',
	transform: 'translateX(-50%)'
}));

const DeviceAvailableColor = styled('figure', { name: 'device-available-color' })(({ theme, image }) => ({
	margin: '14px 0px 10px 0px',
	height: '44px',
	width: '97px',
	backgroundImage: image.url.mobile,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	[theme.breakpoints.up('tablet')]: {
		height: '19px',
		backgroundImage: image.url.tablet
	}
}));
const BuyButtonReduced = styled(Button, { name: 'buy-cta-button-reduced' })(({ theme }) => ({
	...theme.typography.button_reduced,
	padding: '4px 11px',
	borderRadius: '980px',
	background: '#0071e3',
	color: '#fff',
	'&:hover': {
		background: '#0077ED'
	}
}));
const DeviceDisplayCell = styled(Box, { name: 'device-diplay-cell' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '4px'
}));
const FootNoteNumber = styled('sup')(({ theme }) => ({
	top: 'initial',
	position: 'relative',
	verticalAlign: 'baseline',
	fontSize: '1rem',
	fontFeatureSettings: `'numr'`
}));
const DeviceCellularCell = styled(Box, { name: 'device-cellular-cell' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '4px',
	alignItems: 'center'
}));

const CellularIcon = styled('figure', { name: 'cellular-icon' })(({ theme, icon }) => ({
	margin: '0 auto 8px auto',
	backgroundImage: icon.url,
	width: icon.width,
	height: icon.height,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}));
const DeviceChipCell = styled(Box, { name: 'device-chip-cell' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '4px',
	alignItems: 'center'
}));

const DeviceChipCellIcon = styled('figure', { name: 'device-chip-cell' })(({ theme, icon }) => ({
	margin: '0 auto 8px auto',
	backgroundImage: icon.url,
	width: icon.width,
	height: icon.height,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}));
const DeviceCameraCell = styled(Box, { name: 'device-camera-cell' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '4px',
	alignItems: 'center'
}));

const DeviceCameralCellIcon = styled('figure', { name: 'device-cameral-cell-icon' })(({ theme, icon }) => ({
	margin: '0 auto 8px auto',
	backgroundImage: icon.url,
	width: icon.width,
	height: icon.height,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}));
const DeviceLidarCell = styled(Box, { name: 'device-lidar-cell' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '4px',
	alignItems: 'center'
}));

const DeviceLidarlCellIcon = styled('figure', { name: 'device-lidar-cell-icon' })(({ theme, icon }) => ({
	margin: '0 auto 8px auto',
	backgroundImage: icon.url,
	width: icon.width,
	height: icon.height,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}));
const DeviceMagsafeCell = styled(Box, { name: 'device-magasafe-cell' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '4px',
	alignItems: 'center'
}));
const DeviceMagasafeCellIcon = styled('figure', { name: 'device-magasafe-cell-icon' })(({ theme, icon }) => ({
	margin: '0 auto 8px auto',
	backgroundImage: icon.url,
	width: icon.width,
	height: icon.height,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}));
const DeviceCallToActionCell = styled(Box, { name: 'device-cta-cell' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	display: 'flex',
	flexDirection: 'column',
	padding: '18px 0px 20px 0px',
	marginTop: '2px',
	alignItems: 'center',
	borderTop: '1px solid #d2d2d7'
}));
const Grid__Descriptions = [
	//iPhone-12-pro
	{
		gridArea: {
			device_wrapper: 'iphone-12-pro-device',
			display_cell: 'iphone-12-pro-display',
			celluar_cell: 'iphone-12-pro-cellular',
			chip_cell: 'iphone-12-pro-chip',
			cameral_cell: 'iphone-12-pro-camera',
			lidar_cell: 'iphone-12-pro-lidar',
			magasafe_cell: 'iphone-12-pro-magsafe',
			cta_cell: 'iphone-12-pro-cta'
		},
		image: {
			mobile: { url: 'url(./compare_section/compare_iphone_12_pro__small_2x.jpg)', width: '130px', height: '168px' },
			tablet: { url: 'url(./compare_section/compare_iphone_12_pro__large_2x.jpg)', width: '199px', height: '256px' }
		},
		device_content: {
			new: true,
			logo: {
				mobile: { url: 'url(./compare_section/logo_iphone_12_pro__small_2x.png)', width: '125px', height: '20px' },
				tablet: { url: 'url(./compare_section/logo_iphone_12_pro__large_2x.png)', width: '135px' }
			},
			availableColor_logo: {
				url: {
					mobile: 'url(./compare_section/swatches_iphone_12_pro__large_2x.jpg)'
				}
			},
			price_tag: 'From $999',
			tout: 'The ultimate iPhone.'
		},
		device_display: {
			text1: '6.1″ or 6.7″',
			text2: 'all-screen OLED display',
			foot_note: '3'
		},
		device_cellular: {
			icon: {
				url: 'url(./compare_section/icon_5g__large_2x.png)',
				width: '50px',
				height: '36px'
			},
			text1: '5G cellular',
			foot_note: '4'
		},
		device_chip: {
			icon: {
				url: 'url(./compare_section/icon_a14_large_2x.png)',
				width: '40px',
				height: '40px'
			},
			text1: 'A14 Bionic chip',
			text2: '	Fastest chip in a smartphone'
		},
		device_camera: {
			icon: {
				url: 'url(./compare_section/icon_triple_camera__large_2x.png)',
				width: '37px',
				height: '39px'
			},
			text1: 'Pro camera system',
			text2: '	Ultra Wide, Wide, Telephoto'
		},
		device_lidar: {
			available: true,
			icon: {
				url: 'url(./compare_section/icon_lidar__large_2x.png)',
				width: '35px',
				height: '39px'
			},
			text1: 'LiDAR Scanner',
			text2: '	For Night mode portraits and next‑level AR'
		},
		device_magasafe: {
			available: true,
			icon: {
				url: 'url(./compare_section/icon_magsafe__large_2x.png)',
				width: '27px',
				height: '53px'
			},

			text1: 'Compatible with MagSafe accessories'
		}
	},
	//iPhone-12
	{
		gridArea: {
			device_wrapper: 'iphone-12-device',
			display_cell: 'iphone-12-display',
			celluar_cell: 'iphone-12-cellular',
			chip_cell: 'iphone-12-chip',
			cameral_cell: 'iphone-12-camera',
			lidar_cell: 'iphone-12-lidar',
			magasafe_cell: 'iphone-12-magsafe',
			cta_cell: 'iphone-12-cta'
		},
		image: {
			mobile: { url: 'url(./compare_section/compare_iphone_12__small_2x.jpg)', width: '120px', height: '168px' },
			tablet: { url: 'url(./compare_section/compare_iphone_12__large_2x.jpg)', width: '183px', height: '256px' }
		},
		device_content: {
			new: true,
			logo: {
				mobile: { url: 'url(./compare_section/logo_iphone_12_small_2x.png)', width: '88px', height: '20px' },
				tablet: { url: 'url(./compare_section/logo_iphone_12__large_2x.png)', width: '97px' }
			},
			availableColor_logo: {
				url: {
					mobile: 'url(./compare_section/swatches_iphone_12__small_2x.jpg)',
					tablet: 'url(./compare_section/swatches_iphone_12__large_2x.jpg)'
				}
			},
			price_tag: 'From $699',
			tout: 'A total powerhouse.'
		},
		device_display: {
			text1: `5.4″ or 6.1″`,
			text2: 'all-screen OLED display',
			foot_note: '3'
		},
		device_cellular: {
			icon: {
				url: 'url(./compare_section/icon_5g__large_2x.png)',
				width: '50px',
				height: '36px'
			},
			text1: '5G cellular',
			foot_note: '4'
		},
		device_chip: {
			icon: {
				url: 'url(./compare_section/icon_a14_large_2x.png)',
				width: '40px',
				height: '40px'
			},
			text1: 'A14 Bionic chip',
			text2: '	Fastest chip in a smartphone'
		},
		device_camera: {
			icon: {
				url: 'url(./compare_section/icon_dual_camera__large_2x.png)',
				width: '35px',
				height: '39px'
			},
			text1: 'Advanced dual‑camera system',
			text2: 'Ultra Wide, Wide'
		},
		device_lidar: {
			available: false
		},
		device_magasafe: {
			available: true,
			icon: {
				url: 'url(./compare_section/icon_magsafe__large_2x.png)',
				width: '27px',
				height: '53px'
			},
			text1: 'Compatible with MagSafe accessories'
		}
	},
	//iPhone SE
	{
		gridArea: {
			device_wrapper: 'iphone-se-device',
			display_cell: 'iphone-se-display',
			celluar_cell: 'iphone-se-cellular',
			chip_cell: 'iphone-se-chip',
			cameral_cell: 'iphone-se-camera',
			lidar_cell: 'iphone-se-lidar',
			magasafe_cell: 'iphone-se-magsafe',
			cta_cell: 'iphone-se-cta'
		},
		image: {
			mobile: { url: 'url(./compare_section/compare_iphone_se__small_2x.jpg)', width: '90px', height: '168px' },
			tablet: { url: 'url(./compare_section/compare_iphone_se__large_2x.jpg)', width: '136px', height: '256px' }
		},
		device_content: {
			new: false,
			logo: {
				mobile: { url: 'url(./compare_section/logo_iphone_se__small_2x.png)', width: '86px', height: '20px' },
				tablet: { url: 'url(./compare_section/logo_iphone_se__large_2x.png)', width: '98px' }
			},
			availableColor_logo: {
				url: {
					mobile: 'url(./compare_section/swatches_iphone_se__large_2x.jpg)'
				}
			},
			price_tag: 'From $399',
			tout: 'lots to love. Less to spend'
		},
		device_display: {
			text1: '4.7"',
			text2: 'LCD display',
			foot_note: ''
		},
		device_cellular: {
			icon: {
				url: 'url(./compare_section/icon_4g__large_2x.png)',
				width: '50px',
				height: '37px'
			},
			text1: '4G LTE cellular',
			foot_note: '4'
		},
		device_chip: {
			icon: {
				url: 'url(./compare_section/icon_a13__large_2x.png)',
				width: '40px',
				height: '40px'
			},
			text1: 'A13 Bionic chip'
		},
		device_camera: {
			icon: {
				url: 'url(./compare_section/icon_single_camera__large_2x.png)',
				width: '39px',
				height: '39px'
			},
			text1: 'Single-camera system',
			text2: 'Wide'
		},
		device_lidar: {
			available: false
		},
		device_magasafe: {
			available: false
		}
	},
	//iPhone 11
	{
		gridArea: {
			device_wrapper: 'iphone-11-device',
			display_cell: 'iphone-11-display',
			celluar_cell: 'iphone-11-cellular',
			chip_cell: 'iphone-11-chip',
			cameral_cell: 'iphone-11-camera',
			lidar_cell: 'iphone-11-lidar',
			magasafe_cell: 'iphone-11-magsafe',
			cta_cell: 'iphone-11-cta'
		},
		image: {
			mobile: { url: 'url(./compare_section/compare_iphone_11__small_2x.jpg)', width: '102px', height: '168px' },
			tablet: { url: 'url(./compare_section/compare_iphone_11__large_2x.jpg)', width: '155px', height: '256px' }
		},
		device_content: {
			new: false,
			logo: {
				mobile: { url: 'url(./compare_section/logo_iphone_11__small_2x.png)', width: '82px', height: '20px' },
				tablet: { url: 'url(./compare_section/logo_iphone_11__large_2x.png)', width: '101px' }
			},
			availableColor_logo: {
				url: {
					mobile: 'url(./compare_section/swatches_iphone_11__small_2x.jpg)',
					tablet: 'url(./compare_section/swatches_iphone_11__large_2x.jpg)'
				}
			},
			price_tag: 'From $599',
			tout: 'As Amazing. as Ever'
		},
		device_display: {
			text1: '6.1"',
			text2: 'all-screen LCD display',
			foot_note: '3'
		},
		device_cellular: {
			icon: {
				url: 'url(./compare_section/icon_4g__large_2x.png)',
				width: '50px',
				height: '37px'
			},
			text1: '4G LTE cellular',
			foot_note: '4'
		},
		device_chip: {
			icon: {
				url: 'url(./compare_section/icon_a13__large_2x.png)',
				width: '40px',
				height: '40px'
			},
			text1: 'A13 Bionic chip'
		},
		device_camera: {
			icon: {
				url: 'url(./compare_section/icon_dual_camera_iphone11___large_2x.png)',
				width: '35px',
				height: '39px'
			},
			text1: 'Dual-camera system',
			text2: 'Ultra Wide, Wide'
		},
		device_lidar: {
			available: false
		},
		device_magasafe: {
			available: false
		}
	}
];
const CompareSection = () => {
	const NotAvaliable = (
		<Typography
			variant='body_reduced'
			sx={{ height: '100px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			——
		</Typography>
	);

	return (
		<Section>
			<SectionContent>
				<Typography variant='section_headline'>Which iPhone is right for you?</Typography>
				<Box
					sx={{
						color: 'common.link',
						mt: { mobile: '18px', laptop: '26px' },
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%'
					}}>
					<Typography variant='compare_all_cta'>Compare all iPhone models</Typography>
					<ArrowForwardIosIcon />
				</Box>
				<CompareTable>
					{Grid__Descriptions.map(
						({
							gridArea,
							image,
							device_content,
							device_display,
							device_cellular,
							device_chip,
							device_camera,
							device_lidar,
							device_magasafe
						}) => (
							<React.Fragment key={gridArea.device_wrapper}>
								<DeviceWrapper gridArea={gridArea.device_wrapper}>
									<ImageWrapper>
										<Image image={image} />
									</ImageWrapper>
									<DeviceContent>
										{device_content.new === true ? <NewBanner>New</NewBanner> : null}
										<DeviceLogo logo={device_content.logo} />
										<Typography variant='body_reduced'>{device_content.price_tag}</Typography>
										<DeviceAvailableColor image={device_content.availableColor_logo} />
										<Typography variant='tout' sx={{ maxWidth: '140px' }}>
											{device_content.tout}
										</Typography>
										<BuyButtonReduced sx={{ mt: '9.6px' }}>Buy</BuyButtonReduced>
									</DeviceContent>
								</DeviceWrapper>
								<DeviceDisplayCell gridArea={gridArea.display_cell}>
									<Typography variant='body_reduced' component='h4' sx={{ mb: '6px' }}>
										{device_display.text1}
									</Typography>
									<Typography variant='body_reduced' component='p' sx={{ color: 'grey.700' }}>
										{device_display.text2}
										{/*Conditional render footnote */}
										{device_display.foot_note !== '' ? (
											<FootNoteNumber>{device_display.foot_note}</FootNoteNumber>
										) : null}
									</Typography>
								</DeviceDisplayCell>
								<DeviceCellularCell gridArea={gridArea.celluar_cell}>
									<CellularIcon icon={device_cellular.icon} />
									<Typography variant='body_reduced' component='p' sx={{ color: 'grey.700' }}>
										{device_cellular.text1}
										{device_cellular.foot_note ? <FootNoteNumber>{device_cellular.foot_note}</FootNoteNumber> : null}
									</Typography>
								</DeviceCellularCell>
								<DeviceChipCell gridArea={gridArea.chip_cell}>
									<DeviceChipCellIcon icon={device_chip.icon} />
									<Typography variant='body_reduced'>{device_chip.text1}</Typography>
									<Typography variant='body_reduced' component='p' sx={{ color: 'grey.700' }}>
										{device_chip.text2}
									</Typography>
								</DeviceChipCell>
								<DeviceCameraCell gridArea={gridArea.cameral_cell}>
									<DeviceCameralCellIcon icon={device_camera.icon} />
									<Typography variant='body_reduced'>{device_camera.text1}</Typography>
									<Typography variant='body_reduced' component='p' sx={{ color: 'grey.700' }}>
										{device_camera.text2}
									</Typography>
								</DeviceCameraCell>
								<DeviceLidarCell gridArea={gridArea.lidar_cell}>
									{device_lidar.available === true ? (
										<React.Fragment>
											<DeviceLidarlCellIcon icon={device_lidar.icon} />
											<Typography variant='body_reduced'>{device_lidar.text1}</Typography>
											<Typography variant='body_reduced' component='p' sx={{ color: 'grey.700' }}>
												{device_lidar.text2}
											</Typography>
										</React.Fragment>
									) : (
										NotAvaliable
									)}
								</DeviceLidarCell>
								<DeviceMagsafeCell gridArea={gridArea.magasafe_cell}>
									{device_magasafe.available === true ? (
										<React.Fragment>
											<DeviceMagasafeCellIcon icon={device_magasafe.icon} />
											<Typography variant='body_reduced'>{device_magasafe.text1}</Typography>
										</React.Fragment>
									) : (
										NotAvaliable
									)}
								</DeviceMagsafeCell>
								<DeviceCallToActionCell gridArea={gridArea.cta_cell}>
									<Box sx={{ display: 'flex', alignItems: 'center', color: 'common.link' }}>
										<Typography variant='body_reduced'>Learn more</Typography>
										<ArrowForwardIosIcon sx={{ width: '10px', height: '16px', ml: '6px' }} />
									</Box>
								</DeviceCallToActionCell>
							</React.Fragment>
						)
					)}
				</CompareTable>
			</SectionContent>
		</Section>
	);
};

export default CompareSection;
