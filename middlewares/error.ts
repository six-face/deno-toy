export default async ({ response }: { [propName: string]: any }, next: any) => {
  try {
    await next()
  } catch (error) {
    response.status = 500
    response.body = { msg: error.message }
  }
}
