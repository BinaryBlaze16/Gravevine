export async function parseJSONBody(req) {

  if (req.body !== undefined) {
    if (typeof req.body === 'object') {
      return req.body
    }
    try {
      return JSON.parse(req.body)
    } catch (err) {
      throw new Error(`Invalid JSON format in body: ${err}`)
    }
  }

  let body = ''

  for await (const chunk of req) {
    body += chunk
  }

  try {
    return JSON.parse(body)
  } catch (err) {
    throw new Error(`Invalid JSON format: ${err}`)
  }

}