export async function POST(req: Request) {
  try {
    const { username, password } : {username: string, password: string} = await req.json()
    return Response.json({ response: !([username, password].map((v, i) => {return v.toLowerCase() == ["pawlos", "belay"][i]}).includes(false)) });
  } catch (error) {
    console.error("error with static auth:", error)
    return Response.json({ error: "failed to authenticate" }, { status: 500 })
  }
}
