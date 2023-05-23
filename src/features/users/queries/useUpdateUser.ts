import {
  MutateOptions,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { User } from '@/prisma/generated'
import { apiClient } from '@/lib/api/axiosClient'
import { UpdateUserBody } from '@/pages/api/users/update-user'

const updateUser = async (body: UpdateUserBody) =>
  apiClient.post<User, UpdateUserBody>(`/api/users/update-user`, body)

export const useUpdateUser = (
  options?: MutateOptions<User, AxiosError, UpdateUserBody>
): UseMutationResult<User, AxiosError, UpdateUserBody> =>
  useMutation(updateUser, options)
