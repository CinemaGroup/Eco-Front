import '@/assets/styles/global.scss'
import { SITE_EMAILS, SITE_NAME, SITE_URL } from '@/constants/seo.constants'
import MainProvider from '@/providers/MainProvider'
import cn from 'clsx'
import type { Metadata } from 'next'
import { Inter, Roboto_Condensed, Roboto_Flex } from 'next/font/google'

const inter = Inter({
	weight: ['600'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
})
const robotoCondensed = Roboto_Condensed({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-roboto-condensed',
	display: 'swap',
})
const robotoFlex = Roboto_Flex({
	weight: ['200', '300', '400', '500', '600', '700'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-roboto-flex',
	display: 'swap',
})

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	metadataBase: new URL(SITE_URL),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: SITE_EMAILS,
	},
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning={true}
				className={cn(
					inter.variable,
					robotoCondensed.variable,
					robotoFlex.variable
				)}
			>
				<MainProvider>
					{children}
					<div id="modal"></div>
				</MainProvider>
			</body>
		</html>
	)
}
