// Routes

/**
 * @swagger
 * /api/v1/crews:
 *  post:
 *   security:
 *    - bearerAuth: []
 *   tags: [Crews]
 *   summary: Create A Crew Member
 *   description: Create A Crew Member
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
 *       $ref: '#/components/schemas/Crew'
 *   responses:
 *    201:
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/CrewDetail'
 */

/**
 * @swagger
 * /api/v1/crews/{id}:
 *  get:
 *   security:
 *    - bearerAuth: []
 *   tags: [Crews]
 *   summary: Get A Crew Member
 *   description: Get A Crew Member
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
 *       $ref: '#/components/schemas/Crew'
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
 *   CrewDetail:
 *    type: object
 *    properties:
 *     _id:
 *      type: string
 *     name:
 *      type: string
 *     ship:
 *      type: string
 *     createdAt:
 *      type: string
 *      format: date-time
 *     updatedAt:
 *      type: string
 *      format: date-time
 * 
 *   Crew:
 *    type: object
 *    required:
 *     - name
 *     - ship
 *    properties:
 *     name:
 *      type: string
 *     ship:
 *      type: string
 */