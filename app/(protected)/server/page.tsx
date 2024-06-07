import { currentUser } from '@/lib/auth'
import { UserInfo } from '@/components/user-info'

const ServerPage = async () => {
    const user = await currentUser()
  return (
    <div className='w-full px-2 items-center justify-center flex'>
      <UserInfo 
      label="💻 Server Component"
      user={user}
      />
    </div>
  )
}

export default ServerPage