// Routes

/**
 * @swagger
 * /api/v1/login:
 *  post:
 *   security:
 *    - bearerAuth: []
 *   tags: [Auth]
 *   summary: Login A User
 *   description: Login a user
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    200:
 *     description: Login Successful
 */

/**
 * @swagger
 * /api/v1/register:
 *  post:
 *   security:
 *    - bearerAuth: []
 *   tags: [Auth]
 *   summary: Register A User
 *   description: Register A User
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    201:
 *     description: User Created Successfully    
 */

// Models

/**
 * @swagger
 * components:
 *  schemas:
 *   UserDetail:
 *     type: object
 *     properties:
 *      _id:
 *       type: string
 *      email:
 *       type: string
 *       format: email
 *      password:
 *       type: string
 *      createdAt:
 *       type: string
 *       format: date-time
 *      updatedAt:
 *       type: string
 *       format: date-time
 * 
 *   User:
 *     type: object
 *     required:
 *      - email
 *      - password
 *     properties:
 *      email:
 *       type: string
 *       format: email
 *      password:
 *       type: string
 */