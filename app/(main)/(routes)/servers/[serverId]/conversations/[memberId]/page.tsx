import { redirectToSignIn } from "@clerk/nextjs"
import { redirect } from "next/navigation"

import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"

interface MemberIdPageProps {
  params: {
    memberId: string
    serverId: string
  }
}

const MemberIdPage = async ({ params }: MemberIdPageProps) => {
  const profile = await currentProfile()

  if (!profile) {
    return redirectToSignIn()
  }

  const currentMember = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
    include: {
      profile: true,
    },
  })

  if (!currentMember) {
    return redirect("/")
  }

  return <div>MemberIdPage</div>
}

export default MemberIdPage
