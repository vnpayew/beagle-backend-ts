import { getGlobalContext } from '@zup-it/beagle-backend-express'
import { Color } from '@zup-it/beagle-backend-components'
import { User } from './network/user'

export interface GlobalContext {
  user: User,
  balance: {
    total: number,
    currency: string,
  },
  tokens: {
    primary: Color,
    secondary: Color,
    background: Color,
  }
}

export const globalContext = getGlobalContext<GlobalContext>()