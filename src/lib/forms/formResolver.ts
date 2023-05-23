import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { yupSchema } from '@/lib/forms/yupSchema'

/**
 *
 * @param schemas yupSchema의 key값 배열
 * @example
 * formResolver(['nickname', 'id'])의 결과값:
 * yupResolver(
 *   yup.object({
 *     nickname: yupSchema.nickname,
 *     id: yupSchema.id,
 *   })
 * )
 */
export const formResolver = (schemas: Array<keyof typeof yupSchema>) => {
  const map = new Map()

  schemas.forEach((schema) => {
    map.set(schema, yupSchema[schema])
  })
  const resolvers = Object.fromEntries(map)

  return yupResolver(yup.object(resolvers))
}
