// Routes

/**
 * @swagger
 * /api/v1/ships:
 *  post:
 *   security:
 *    - bearerAuth: []
 *   tags: [Ships]
 *   summary: Transfer A Crew Member To A Ship
 *   description: Transfer A Crew Member To A Ship
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
 *       $ref: '#/components/schemas/CrewTransfer'
 *   responses:
 *    200:
 *     description: Crew Member Transferred Successfully
 */

/**
 * @swagger
 * /api/v1/ships/{id}/crews:
 *  get:
 *   security:
 *    - bearerAuth: []
 *   tags: [Ships]
 *   summary: Retrieve All Crew Members Under A Ship
 *   description: Retrieve All Crew Members Under A Ship
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
 *        $ref: '#/components/schemas/CrewDetail'
 */

// Models
/**
 * @swagger
 * components:
 *  schemas:
 *   ShipDetail:
 *    type: object
 *    properties:
 *     _id:
 *      type: string
 *     name:
 *      type: string
 *     mothership:
 *      type: string
 *     crews:
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
 *   Ship:
 *    type: object
 *    required:
 *     - name
 *     - mothership
 *    properties:
 *     name:
 *      type: string
 *     mothership:
 *      type: string
 * 
 *   CrewTransfer:
 *    type: object
 *    required:
 *     - toShip
 *     - fromShip
 *     - crewMemberId
 *    properties:
 *     toShip:
 *      type: string
 *     fromShip:
 *      type: string
 *     crewMemberId:
 *      type: string
 */