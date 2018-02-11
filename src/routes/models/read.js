export default function (options) {
  const { db, logger } = options

  return {
    one: async function (req, res) {
      let status, message, model
      let modelId = parseInt(req.params.id)

      try {
        model = await db.one('select * from models where id = $1', modelId)

        status = 'success'
        message = `Successfully fetched one model....}`
      } catch (err) {
        logger.error(err.message)

        model = null
        status = 'error'
        message = 'Error loading model from database...'
      }

      res.status(200)
      .json({
        body: {
          model: model,
          status: status,
          message: message
        }
      })
    },

    all: async function (req, res) {
      let status, message, models

      try {
        models = await db.any('select * from models')

        status = 'success'
        message = `Successfully fetched ${models.length} models...`
      } catch (err) {
        logger.error(err.message)

        models = null
        status = 'error'
        message = 'Error loading models from database...'
      }

      res.status(200)
      .json({
        body: {
          models: models,
          status: status,
          message: message
        }
      })
    }
  }
}
