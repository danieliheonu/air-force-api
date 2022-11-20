// Routes

/**
 * @swagger
 * /api/v1/motherships:
 *  post:
 *   security:
 *    - bearerAuth: []
 *   tags: [Motherships]
 *   summary: Create A Mothership
 *   description: Create A Mothership
 *   parameters:
 *    - in: header
 *      name: Authorization
 *      schema:
 *       type: string
 *      required: true
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Mothership'
 *   responses:
 *    201:
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MothershipDetail'
 */

/**
 * @swagger
 * /api/v1/motherships:
 *  get:
 *   security:
 *    - bearerAuth: []
 *   tags: [Motherships]
 *   summary: Retrieve All Motherships
 *   description: Retrieve All Motherships
 *   parameters:
 *    - in: header
 *      name: Authorization
 *      schema:
 *       type: string
 *      required: true
 *   responses:
 *    200:
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        $ref: '#/components/schemas/MothershipDetail'
 */

/**
 * @swagger
 * /api/v1/motherships/{id}:
 *  get:
 *   security:
 *    - bearerAuth: []
 *   tags: [Motherships]
 *   summary: Retrieve A Mothership
 *   description: Retrieve A Mothership
 *   parameters:
 *    - in: header
 *      name: Authorization
 *      schema:
 *       type: string
 *      required: true
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *   responses:
 *    200:
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MothershipDetail'
 */

/**
 * @swagger
 * /api/v1/motherships/{id}:
 *  post:
 *   security:
 *    - bearerAuth: []
 *   tags: [Motherships]
 *   summary: Add Ship A Mothership
 *   description: Add Ship A Mothership
 *   parameters:
 *    - in: header
 *      name: Authorization
 *      schema:
 *       type: string
 *      required: true
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/AddShipToMothership'
 *   responses:
 *    200:
 *     description: Successfully Added Ship To Mothership
 */

/**
 * @swagger
 * /api/v1/motherships/{id}/ships:
 *  get:
 *   security:
 *    - bearerAuth: []
 *   tags: [Motherships]
 *   summary: Retrieve All Ships Under A Mothership
 *   description: Retrieve All Ships Under A Mothership
 *   parameters:
 *    - in: header
 *      name: Authorization
 *      schema:
 *       type: string
 *      required: true
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *   responses:
 *    200:
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MothershipDetail'
 */

/**
 * @swagger
 * /api/v1/motherships/{mothershipId}/ships/{shipId}:
 *  delete:
 *   security:
 *    - bearerAuth: []
 *   tags: [Motherships]
 *   summary: Retrieve All Ships Under A Mothership
 *   description: Retrieve All Ships Under A Mothership
 *   parameters:
 *    - in: header
 *      name: Authorization
 *      schema:
 *       type: string
 *      required: true
 *    - in: path
 *      name: mothershipId
 *      schema:
 *       type: string
 *      required: true
 *    - in: path
 *      name: shipId
 *      schema:
 *       type: string
 *      required: true
 *   responses:
 *    200:
 *     description: Successfully Removed Ship From Mothership
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ShipDetail'
 */

// Models

/**
 * @swagger
 * components:
 *  schemas:
 *   MothershipDetail:
 *    type: object
 *    properties:
 *     _id:
 *      type: string
 *     name:
 *      type: string
 *     user:
 *      type: string
 *     ships:
 *      type: array
 *      items:
 *       type: string
 *     createdAt:
 *      type: string
 *      format: date-time
 *     updatedAt:
 *      type: string
 *      format: date-time
 * 
 *   Mothership:
 *    type: object
 *    required:
 *     - name
 *     - user
 *    properties:
 *     name:
 *      type: string
 *     user:
 *      type: string
 * 
 *   AddShipToMothership:
 *    type: object
 *    required:
 *     - noShip
 *    properties:
 *     noShip:
 *      type: integer
 */