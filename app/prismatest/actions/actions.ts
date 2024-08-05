//server directive to issue server commands
"use server"

import prisma from "@/lib/db"

//function to create a new chain entry in database
export async function createChain(formData: FormData) {
    await prisma.chains.create({
        data: {
            title: formData.get("title") as string
        }
    })
}

export async function createLink(formData: FormData) {
    await prisma.link.create({
        data: {
            title: formData.get("title") as string,
            link: formData.get("content") as string,
            //will change, access for now is by chain id
            chainId: parseInt(formData.get("chainId") as string, 10)
        }
    })
}