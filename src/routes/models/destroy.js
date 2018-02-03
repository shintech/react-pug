export default function (options) {
  const { db, logger } = options

  return async function (req, res) {
    let modelId = parseInt(req.params.id)

    try {
      await db.one('delete from models where id = $1 returning id', modelId)
    } catch (err) {
      logger.error(err.message)

      return res.send(`Error deleting model id ${modelId}...`)
    }

    res.status(200)
    .json({
      status: 'success',
      message: `Removed model id: ${modelId}...`
    })
  }
}
