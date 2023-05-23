import * as yup from 'yup'

export const yupSchema = {
  nickname: yup
    .string()
    .min(4, '4자리 이상 입력해주세요.')
    .max(10, '10자리 이하로 입력해주세요.')
    .required('닉네임을 입력해주세요.'),
  jobCategoryId: yup.string().uuid(),
}
