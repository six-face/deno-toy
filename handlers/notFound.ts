export default async ({ response }: { [propName: string]: any }) => {
  response.status = 404
  response.body = { msg: 'Not Found' }
}
