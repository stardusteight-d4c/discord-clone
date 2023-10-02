import { redirect } from "next/navigation"
import { redirectToSignIn } from "@clerk/nextjs"

import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"

interface ChannelIdPageProps {
  params: {
    serverId: string
    channelId: string
  }
}

const ChannelIdPage = async ({ params }: ChannelIdPageProps) => {
  const profile = await currentProfile()

  if (!profile) {
    return redirectToSignIn()
  }

  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId,
    },
  })

  const member = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
  })

  if (!channel || !member) {
    redirect("/")
  }

  return <div>ChannelIdPage</div>
}

export default ChannelIdPage
