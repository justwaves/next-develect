import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { User } from '@/prisma/generated'
import { apiClient } from '@/lib/api/axiosClient'

const fetchUserById = async (id: string) =>
  apiClient.get<User>(`/api/users/${id}`)

export const useGetUser = (id?: string): UseQueryResult<User> =>
  useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id || ''),
    enabled: Boolean(id),
  })
