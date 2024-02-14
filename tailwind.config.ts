import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			'roboto-flex': ['var(--font-roboto-flex)'],
			'roboto-condensed': ['var(--font-roboto-condensed)'],
			inter: ['var(--font-inter)'],
		},
		colors: {
			white: colors.white,
			black: colors.black,
			transparent: colors.transparent,
			gray: {
				base: '#1B1B1B',
				800: '#242529',
				700: '#39393f',
				600: '#3B3B3B',
				500: '#5A5959',
				400: '#929191',
				300: '#A6A6A6',
				200: '#C5C5C5',
			},
			purple: {
				600: '#5439db',
				400: '#7b61ff',
			},
			red: {
				400: '#C22D1B',
				300: '#F31559',
			},
			green: {
				300: '#2EE89A',
			},
			pink: {
				300: '#EDC3BE',
			},
		},
		fontSize: {
			'sm-minus': '10px',
			sm: '12px',
			'sm-plus': '14px',
			'md-minus': '15px',
			md: '16px',
			'md-plus': '18px',
			base: '20px',
			lg: '22px',
			'2lg': '24px',
			'3lg': '29px',
			'4lg': '32px',
			'5lg': '35px',
			'6lg': '36px',
			'7lg': '38px',
			'8lg': '40px',
			big: '48px',
			bigger: '55px',
			biggest: '128px',
		},
		zIndex: {
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
		},
		extend: {
			lineHeight: {
				sm: '1.1',
				'sm-plus': '1.2',
				md: '1.3',
				'md-plus': '1.4',
				lg: '1.5',
				'2lg': '1.6',
				'3lg': '1.7',
				'4lg': '1.8',
				'5lg': '1.9',
				'6lg': '2',
			},
			borderRadius: {
				sm: '5px',
				'sm-plus': '10px',
				md: '15px',
				'md-plus': '20px',
				lg: '25px',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
			keyframes: {
				hide: {
					from: { opacity: '1' },
					to: { opacity: '0' },
				},
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: '0.3',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				hide: 'hide .5s ease-in-out forwards',
				fade: 'fade .5s ease-in-out forwards',
				scaleIn: 'scaleIn .35s ease-in-out forwards',
			},
		},
	},
	plugins: [
		plugin(
			({
				addComponents,
				theme,
				addUtilities,
			}: {
				addUtilities: Function
				addComponents: Function
				theme: Function
			}) => {
				addComponents({
					'.btn-gradient': {
						background:
							'linear-gradient(26.57deg,#3c1a70 0%,rgba(93,14,245,.83))',
					},

					'.underline-hover': {
						position: 'relative',

						'&::after': {
							position: 'absolute',
							left: '0',
							bottom: '-4px',
							height: '1px',
							width: '0px',
							backgroundColor: theme('colors.white'),
							transition: 'width 200ms ease-in-out',
						},
						'&:hover::after': {
							width: '100%',
						},
					},

					'.scale-hover': {
						transition: 'transform 200ms ease-in-out',
						'&:hover': {
							transform: `scale(1.05)`,
						},
					},

					'.scale-hover-small': {
						transition: 'transform 200ms ease-in-out',
						'&:hover': {
							transform: `scale(1.02)`,
						},
					},

					'.btn-primary': {
						backgroundColor: theme('colors.red.400'),
						color: theme('colors.white'),
						fontFamily: theme('fontFamily.roboto-flex'),
						fontSize: theme('fontSize.2lg'),
						fontWeight: 500,
						borderRadius: theme('borderRadius.md'),
						transition: 'box-shadow 200ms ease-in-out',
						'&:hover': {
							'box-shadow': `(0px 4px 10px ${theme('colors.red.400')})`,
						},
					},

					'.btn': {
						backgroundColor: theme('colors.transparent'),
						color: theme('colors.white'),
						fontFamily: theme('fontFamily.roboto-flex'),
						fontSize: theme('fontSize.2lg'),
						fontWeight: 500,
						borderRadius: theme('borderRadius.md'),
						border: `2px solid ${theme('colors.white')}`,
						transition: 'transform 200ms ease-in-out',
						'&:hover': {
							transform: `scale(1.01)`,
						},
					},
				})

				addUtilities({
					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg': {
						zIndex: -1,
						width: '100%',
						height: '100%',
						pointerEvents: 'none',
					},

					'.image-like-bg-cover': {
						zIndex: -1,
						width: '100%',
						height: '100%',
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},

					'.image-like-bg-contain': {
						zIndex: -1,
						width: '100%',
						height: '100%',
						objectPosition: 'center',
						objectFit: 'contain',
						pointerEvents: 'none',
					},
				})
			}
		),
	],
}
export default config
