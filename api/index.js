import { handleGet, handlePost } from '../handlers/routeHandlers.js'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return await handleGet(res)
  } else if (req.method === 'POST') {
    return await handlePost(req, res)
  } else {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
  }
}
