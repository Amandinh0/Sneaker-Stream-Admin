import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession();
  return <Layout>
     <div className="text-sky-300 flex justify-between">
      <h2>
         Hello, <b>{session?.user?.name}</b>
      </h2>
       <div className="flex bg-slate-300 p-1 rounded-md gap-1 text-black">
        <img src={session?.user?.image} alt="image" className="w-5 h-5 rounded-lg"/>
        {session?.user?.name}
       </div>
     </div>
    </Layout>

}

