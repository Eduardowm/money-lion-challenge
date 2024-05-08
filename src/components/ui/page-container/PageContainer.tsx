import { PropsWithChildren } from 'react'

function PageContainer({ children }: PropsWithChildren) {
  return <div className="flex max-w-[600px] w-full mx-auto my-5 px-2">{children}</div>
}
export default PageContainer
