/**
 * unknown
 * unknown
 *
 * OpenAPI spec version: last
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface GwUsersBody {
  /**
   * 创建人
   */
  "adder": number;
  /**
   * 创建时间
   */
  "addtime": string;
  /**
   * 修改人
   */
  "moder": number;
  /**
   * 修改时间
   */
  "modtime": string;
  /**
   * 用户金币数量
   */
  "user_golds": number;
  /**
   * 用户名
   */
  "user_name": string;
  /**
   * 手机号
   */
  "user_phone": string;
}

