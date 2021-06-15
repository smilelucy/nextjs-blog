// req is an instance of http.IncomingMessage
// res is an instance of http.ServerResponse
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
  }