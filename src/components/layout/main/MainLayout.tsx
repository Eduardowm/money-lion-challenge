import { PropsWithChildren } from 'react'

function MainLayout({ children }: PropsWithChildren) {
  return <main className="flex min-h-screen flex-col bg-gray-900 text-white">{children}</main>
}
export default MainLayout
