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

			lg: { max: '1280px' },
			// => @media (max-width: 1023px) { ... }
			lg_min: '1280px',

			md: { max: '1000px' },
			// => @media (max-width: 767px) { ... }
			md_min: '1000px',

			sm: { max: '750px' },
			// => @media (max-width: 639px) { ... }
			sm_min: '750px',
			
			xs: { max: '500px' },
			// => @media (max-width: 375px) { ... }
			xs_min: '500px',

			xxs: { max: '320px' },
			// => @media (max-width: 375px) { ... }
			xxs_min: '320px',

			def: '1110px',
		},
		extend: {
			colors: {
				'color-a': '#32CD32', //!primary
				'color-b': '', //!primary-hover
				'color-c': '#CEFFCE', //!secondary
				'color-d': '#5AFF15',
				'color-e': '#032D3C', 
				'color-f': '#FAFFFA', 
				'color-g': '#B9B9B9', 
				'color-h': '#626262',
				'color-i': '#FFF3FF',
				'color-j1': '#FEEFEA', 
				'color-j2': '#FFF3FF',
				'color-j3': '#F2FCE4',
				'color-j4': '#ECFFEC',
				'color-j5': '#FFFAE0',
				'color-j6': '#DEF9EC',

				'color-bg': '#FFFFFF',
				'color-bg-second': '#EDFBED',
				base: '#000',
				
			},
			borderRadius: {
				base: rem(15),
			},
			fontSize: {
				xs: rem(6),
				'xs1': rem(10),
				sm: rem(12),
				base: rem(15),
				lg: rem(20),
				'lg1': rem(25),
				xl: rem(40),
				'2xl': rem(35),
				'3xl': rem(38),
				'4xl': rem(40),
				'5xl': rem(56),
			},
			btnSize: {
				'xs-x': rem(100),
				'xs-y': rem(50),
				'sm-x': rem(110),
				'sm-y': rem(29),
				'base-x': rem(161),
				'base-y': rem(39),
				'lg-x': rem(250),
				'lg-y': rem(50),
				'xl-x': rem(300),
				'xl-y': rem(50),
				'2xl-x': rem(245),
				'2xl-y': rem(60),
				'3xl-x': rem(200),
				'3xl-y': rem(44),
				'4xl-x': rem(22),
				'4xl-y': rem(22),
				'5xl-x': rem(22),
				'5xl-y': rem(22),
			},
			iconSize: {
				xs: rem(20),
				sm: rem(14),
				base: rem(114),
				lg: rem(25),
				xl: rem(45),
				'1xl': rem(35),
				'2xl': rem(127),
				'3xl': rem(74),
				'4xl': rem(8),
				'5xl': rem(56),
			},
		},
	},

	plugins: [
		plugin(function ({ addBase, addComponents, addUtilities, theme }) {
			addBase({
				h1: {
					fontSize: theme('fontSize.xl'),
					
				},
				h2: {
					fontSize: theme('fontSize.2xl'),
				},
			})
			addComponents({
				//! Shared
				'.btn': {
					fontSize: theme('fontSize.base'),
					// fontWeight: theme('fontWeight.semibold'),
					// gap: rem(10),
					borderRadius: rem(14),
					borderWidth: rem(1),
					transition: '0.3s all',

					'&-icon': {
						width: theme('iconSize.1xl'),
						height: theme('iconSize.1xl'),
						borderRadius: rem(100),
						'@media (max-width: 750px)': {
							width: theme('iconSize.xs'),
							height: theme('iconSize.xs'),
						},
					},
					
					//!default
					// '@media (max-width: 1279px)': {
					// 	fontSize: theme('fontSize.xs'),
					// 	padding: rem(10),
					// },
					// width: theme('btnSize.base-x'),
					// minHeight: theme('btnSize.base-y'),
					// height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderStyle: 'solid',
					borderColor: theme('colors.transparent'),

					'&-color-a': {
						fill: theme('colors.color-a'),
						color: theme('colors.color-bg'),
						background: theme('colors.color-a'),
						// borderColor: theme('colors.color-j'),
						'&:hover': {
							fill: theme('colors.color-bg-second'),
							color: theme('colors.color-bg'),
							background: theme('colors.color-d'),
							// borderColor: theme('colors.color-a'),
						},
					},
					'&-color-b': {
						fill: theme('colors.base'),
						color: theme('colors.color-e'),
						background: theme('colors.color-bg'),
						borderColor: theme('colors.color-a'),
						'&:hover': {
							fill: theme('colors.color-b'),
							color: theme('colors.color-e'),
							background: theme('colors.white'),
							borderColor: theme('colors.color-d'),
						},
					},
					'&-color-c': {
						fill: theme('colors.base'),
						color: theme('colors.color-e'),
						background: theme('colors.color-bg'),
						borderColor: theme('colors.color-a'),
						'&:hover': {
							fill: theme('colors.color-b'),
							color: theme('colors.white'),
							background: theme('colors.color-a'),
							borderColor: theme('colors.color-a'),
						},
					},
					'&-color-d': {
						fill: theme('colors.base'),
						color: theme('colors.color-e'),
						background: theme('colors.color-bg-second'),
						borderColor: theme('colors.color-a'),
						'&:hover': {
							fill: theme('colors.color-b'),
							color: theme('colors.base'),
							background: theme('colors.color-a'),
							borderColor: theme('colors.color-a'),
						},
					},
					'&-color-e': {
						fill: theme('colors.white'),
						color: theme('colors.color-a'),
						background: theme('colors.white'),
						borderColor: theme('colors.white'),
						'&:hover': {
							fill: theme('colors.color-a'),
							color: theme('colors.color-a'),
							background: theme('colors.white'),
							borderColor: theme('colors.color-a'),
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
						// width: theme('btnSize.sm-x'),
						height: theme('btnSize.sm-y'),
						borderRadius: rem(9),

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
						fontSize: theme('fontSize.base'),
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
					boxShadow: '0px 0px 14px -4px rgba(50, 205, 50, 0.34);',
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
