import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		'& .logo-icon': {
			height: 24,
			transition: theme.transitions.create(['width', 'height'], {
				duration: theme.transitions.duration.shortest,
				easing: theme.transitions.easing.easeInOut
			})
		},
		'& .react-badge, & .logo-text': {
			transition: theme.transitions.create('opacity', {
				duration: theme.transitions.duration.shortest,
				easing: theme.transitions.easing.easeInOut
			})
		}
	},
	reactBadge: {
		backgroundColor: '#ffffff',
		color: '#61DAFB'
	}
}));

function Logo() {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, 'flex items-center')}>
			<img className="logo-icon" src="assets/images/logos/logo.png" alt="logo" />
			<Typography className="text-16 mx-12 font-light logo-text" color="inherit">
				
			</Typography>
		</div>
	);
}

export default Logo;
