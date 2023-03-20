import { createOperationFactory } from 'fireboom-wundersdk/operations'
import type { CustomClaims } from './claims'
import type { InternalClient } from './fireboom.internal.client'
import type { Queries,Mutations,Subscriptions } from './fireboom.internal.operations.client'
import type { Role } from './claims'

export { z, AuthorizationError } from 'fireboom-wundersdk/operations'
export const createOperation = createOperationFactory<InternalClient, Role, CustomClaims, Queries, Mutations, Subscriptions>()
