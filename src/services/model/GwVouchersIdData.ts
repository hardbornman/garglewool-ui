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

/**
 * 抵用券管理
 */
export interface GwVouchersIdData {
  /**
   * 创建人
   */
  "adder"?: number;
  /**
   * 创建时间
   */
  "addtime"?: string;
  /**
   * 0:未知，1：未删除，2：已删除
   */
  "deleteStatus"?: number;
  /**
   * 修改人
   */
  "moder"?: number;
  /**
   * 修改时间
   */
  "modtime"?: string;
  /**
   * 抵用券号
   */
  "voucher_code"?: string;
  /**
   * 创建时间
   */
  "voucher_createtime"?: string;
  /**
   * 是否失效
   */
  "voucher_isinvalid"?: number;
  /**
   * 额度
   */
  "voucher_quota"?: number;
  /**
   * 抵消
   */
  "voucher_reduce"?: number;
  /**
   * 用户id
   */
  "voucher_userid"?: number;
  /**
   * 有效期（天）
   */
  "voucher_validdays"?: number;
  /**
   * 抵用券ID
   */
  "voucherid"?: number;
}

