import Nav from "@/components/Nav"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout({children}) {

  // function customSignIn(){
  //   event.preventDefault();
  //   signIn('google'); 
  // }

  const { data: session } = useSession()
  if(!session){
    return (
      <div className="bg-sky-300 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 rounded-lg">Login with Google</button>
        </div>
      </div>
    )
  }
  return (
      <div className="bg-sky-300 min-h-screen flex">
        <Nav />
        <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
          </div>
      </div>
    )
}
