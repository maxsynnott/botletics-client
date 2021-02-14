import Header from './Header'

interface LayoutWrapperProps {
	children: any
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
	return (
		<>
			<Header />
			{children}
		</>
	)
}
