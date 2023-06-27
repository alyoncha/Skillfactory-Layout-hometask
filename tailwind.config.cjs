/** @type {import('tailwindcss').Config} */
const rem = val => `${val / 16}rem`
const plugin = require('tailwindcss/plugin')
module.exports = {
	content: ['./*.{vue,js,html}'],
	theme: {
		screens: {
			xl: { max: '1921px' },
			// => @media (max-width: 1279px) { ... }
			xls: { max: '1300px' },
			lg: { max: '1200px' },
			// => @media (max-width: 1023px) { ... }
			lg_min: '1200px',

			md: { max: '992px' },
			// => @media (max-width: 767px) { ... }
			md_min: '992px',

			sm: { max: '639px' },
			// => @media (max-width: 639px) { ... }
			sm_min: '639px',

			def: '1110px',
		},
		extend: {
			colors: {
				'color-a': '#32CD32', //!primary
				'color-b': '', //!primary-hover
				'color-c': '#CEFFCE', //!secondary
				'color-d': '#5AFF15',
				'color-e': '#032D3C', 
				'color-f': '', 
				'color-g': '', 
				'color-h': '',
				'color-i': '',
				'color-j': '', 
		
				'color-bg': '#FFFFFF',
				'color-bg-second': '',
				base: '#000',
				
			},
			fontSize: {
				xs: rem(12),
				sm: rem(14),
				base: rem(16),
				lg: rem(20),
				xl: rem(24),
				'2xl': rem(32),
				'3xl': rem(38),
				'4xl': rem(40),
				'5xl': rem(56),
			},
			btnSize: {
				'xs-x': rem(100),
				'xs-y': rem(50),
				'sm-x': rem(150),
				'sm-y': rem(50),
				'base-x': rem(200),
				'base-y': rem(16),
				'lg-x': rem(250),
				'lg-y': rem(50),
				'xl-x': rem(300),
				'xl-y': rem(50),
				'2xl-x': rem(400),
				'2xl-y': rem(22),
				'3xl-x': rem(22),
				'3xl-y': rem(22),
				'4xl-x': rem(22),
				'4xl-y': rem(22),
				'5xl-x': rem(22),
				'5xl-y': rem(22),
			},
			iconSize: {
				xs: rem(12),
				sm: rem(14),
				base: rem(20),
				lg: rem(25),
				xl: rem(40),
				'2xl': rem(32),
				'3xl': rem(38),
				'4xl': rem(40),
				'5xl': rem(56),
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, addComponents, addUtilities, theme }) {
			addBase({
				h1: {
					fontSize: theme('fontSize.2xl'),
				},
				h2: {
					fontSize: theme('fontSize.xl'),
				},
			})
			addComponents({
				//! Shared
				'.btn': {
					fontSize: theme('fontSize.base'),
					fontWeight: theme('fontWeight.semibold'),
					gap: rem(10),
					borderRadius: rem(10),
					borderWidth: rem(1),
					transition: '0.3s all',

					'.icon': {
						width: theme('iconSize.base'),
						height: theme('iconSize.base'),
						'@media (max-width: 1279px)': {
							width: theme('iconSize.xs'),
							height: theme('iconSize.xs'),
						},
					},
					
					//!default
					// '@media (max-width: 1279px)': {
					// 	fontSize: theme('fontSize.xs'),
					// 	padding: rem(10),
					// },
					width: theme('btnSize.base-x'),
					minHeight: theme('btnSize.base-y'),
					// height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderStyle: 'solid',
					borderColor: theme('colors.transparent'),

					'&-color-a': {
						fill: theme('colors.color-bg-second'),
						color: theme('colors.color-c'),
						background: theme('colors.color-bg-second'),
						borderColor: theme('colors.color-j'),
						'&:hover': {
							fill: theme('colors.color-bg-second'),
							color: theme('colors.color-a'),
							background: theme('colors.white'),
							borderColor: theme('colors.color-a'),
						},
					},
					'&-color-b': {
						fill: theme('colors.base'),
						color: theme('colors.color-bg-second'),
						background: theme('colors.color-b'),
						borderColor: theme('colors.color-b'),
						'&:hover': {
							fill: theme('colors.color-b'),
							color: theme('colors.color-b'),
							background: theme('colors.white'),
							borderColor: theme('colors.color-b'),
						},
					},
					'&-color-c': {
						fill: theme('colors.base'),
						color: theme('colors.base'),
						background: theme('colors.color-c'),
						borderColor: theme('colors.color-c'),
						'&:hover': {
							fill: theme('colors.color-c'),
							color: theme('colors.color-c'),
							background: theme('colors.white'),
							borderColor: theme('colors.color-c'),
						},
					},
					'&-color-d': {
						fill: theme('colors.base'),
						color: theme('colors.base'),
						background: theme('colors.color-d'),
						borderColor: theme('colors.color-d'),
						'&:hover': {
							fill: theme('colors.black'),
							color: theme('colors.black'),
							background: theme('colors.color-e'),
							borderColor: theme('colors.color-e'),
						},
					},
					'&-color-e': {
						fill: theme('colors.base'),
						color: theme('colors.base'),
						background: theme('colors.color-e'),
						borderColor: theme('colors.color-e'),
						'&:hover': {
							fill: theme('colors.color-e'),
							color: theme('colors.color-e'),
							background: theme('colors.white'),
							borderColor: theme('colors.color-e'),
						},
					},
					'&-color-f': {
						fill: theme('colors.base'),
						color: theme('colors.base'),
						background: theme('colors.color-f'),
						borderColor: theme('colors.color-f'),
						'&:hover': {
							fill: theme('colors.color-f'),
							color: theme('colors.color-f'),
							background: theme('colors.white'),
							borderColor: theme('colors.color-f'),
						},
					},
					'&-color-g': {
						fill: theme('colors.base'),
						color: theme('colors.base'),
						background: theme('colors.color-g'),
						borderColor: theme('colors.color-g'),
						'&:hover': {
							fill: theme('colors.color-g'),
							color: theme('colors.color-g'),
							background: theme('colors.white'),
							borderColor: theme('colors.color-g'),
						},
					},

					'&-xs': {
						fontSize: theme('fontSize.xs'),
						width: theme('btnSize.xs-x'),
						height: theme('btnSize.xs-y'),
						'.icon': {
							width: theme('iconSize.xs'),
							height: theme('iconSize.xs'),
						},
					},
					'&-sm': {
						fontSize: theme('fontSize.base'),
						width: theme('btnSize.sm-x'),
						height: theme('btnSize.sm-y'),
						'.icon': {
							width: theme('iconSize.sm'),
							height: theme('iconSize.sm'),
						},
					},
					'&-lg': {
						fontSize: theme('fontSize.lg'),
						width: theme('btnSize.lg-x'),
						height: theme('btnSize.lg-y'),
						'.icon': {
							width: theme('iconSize.lg'),
							height: theme('iconSize.lg'),
						},
					},
					'&-xl': {
						fontSize: theme('fontSize.base'),
						width: theme('btnSize.xl-x'),
						height: theme('btnSize.xl-y'),
						'.icon': {
							width: theme('iconSize.xl'),
							height: theme('iconSize.xl'),
						},
					},
					'&-2xl': {
						fontSize: theme('fontSize.base'),
						width: theme('btnSize.2xl-x'),
						height: theme('btnSize.2xl-y'),
						'.icon': {
							width: theme('iconSize.base'),
							height: theme('iconSize.base'),
						},
					},
					'&-3xl': {
						fontSize: theme('fontSize.3xl'),
						width: theme('btnSize.3xl-x'),
						height: theme('btnSize.3xl-y'),
						'.icon': {
							width: theme('iconSize.3xl'),
							height: theme('iconSize.3xl'),
						},
					},
					'&-4xl': {
						fontSize: theme('fontSize.4xl'),
						width: theme('btnSize.4xl-x'),
						height: theme('btnSize.4xl-y'),
						'.icon': {
							width: theme('iconSize.4xl'),
							height: theme('iconSize.4xl'),
						},
					},
					'&-5xl': {
						fontSize: theme('fontSize.5xl'),
						width: theme('btnSize.5xl-x'),
						height: theme('btnSize.5xl-y'),
						'.icon': {
							width: theme('iconSize.5xl'),
							height: theme('iconSize.5xl'),
						},
					},
				},

				'.icon': {
					width: theme('iconSize.base'),
					height: theme('iconSize.base'),
					'&.icon-xl': {
						width: rem(40),
						height: rem(40),
					},

					'&.icon-color-a': {
						fill: theme('colors.base'),
						'&:hover': {
							fill: theme('colors.color-a'),
						},
					},
					'&.icon-color-b': {
						fill: theme('colors.base'),
						'&:hover': {
							fill: theme('colors.color-b'),
						},
					},
					'&.icon-color-c': {
						fill: theme('colors.base'),
						'&:hover': {
							fill: theme('colors.color-c'),
						},
					},
					'&.icon-color-d': {
						fill: theme('colors.base'),
						'&:hover': {
							fill: theme('colors.color-d'),
						},
					},
					'&.icon-color-e': {
						fill: theme('colors.base'),
						'&:hover': {
							fill: theme('colors.color-e'),
						},
					},
					'&.icon-color-f': {
						fill: theme('colors.base'),
						'&:hover': {
							fill: theme('colors.color-f'),
						},
					},
					'&.icon-color-g': {
						fill: theme('colors.base'),
						'&:hover': {
							fill: theme('colors.color-g'),
						},
					},

					'&.icon-xs': {
						width: theme('iconSize.xs'),
						height: theme('iconSize.xs'),
					},
					'&.icon-sm': {
						width: theme('iconSize.sm'),
						height: theme('iconSize.sm'),
					},
					'&.icon-lg': {
						width: theme('iconSize.lg'),
						height: theme('iconSize.lg'),
					},
					'&.icon-xl': {
						width: theme('iconSize.xl'),
						height: theme('iconSize.xl'),
					},
					'&.icon-2xl': {
						width: theme('iconSize.2xl'),
						height: theme('iconSize.2xl'),
					},
					'&.icon-3xl': {
						width: theme('iconSize.3xl'),
						height: theme('iconSize.3xl'),
					},
					'&.icon-4xl': {
						width: theme('iconSize.4xl'),
						height: theme('iconSize.4xl'),
					},
					'&.icon-5xl': {
						width: theme('iconSize.5xl'),
						height: theme('iconSize.5xl'),
					},
				},
				//!Setting
				'.max-w': {
					maxWidth: rem(1366),
					padding: rem(20),
					'@media (max-width: 639px)': {
						padding: rem(15),
					},
				},

				'.shadow-base': {
					boxShadow: '0px 0px 13.6px -3.6px rgba(50, 205, 50, 0.16);',
				},
				//!Position
				'.flex-c': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.flex-sb': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},
			})
			addUtilities({
				'.scroll-h': {
					contentVisibility: 'auto',
					overflowX: 'auto',
					paddingBottom: '9px',
				},
			})
		}),
	],
}
