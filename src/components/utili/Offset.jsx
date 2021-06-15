import { styled } from '@material-ui/core/styles';

const Offset = styled('div', { name: 'main-sectin-offset' })(() => ({
	height: 'calc(56px + 116px)', // height set to the sum of two head bar
	width: '100%'
}));

export default Offset;
