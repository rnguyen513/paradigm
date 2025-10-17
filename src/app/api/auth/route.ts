export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()
    return Response.json({ response: username == "pawlos" && password == "belay" })
  } catch (error) {
    console.error("error in static auth:", error)
    return Response.json({ error: "failed to authenticate" }, { status: 500 })
  }
}
