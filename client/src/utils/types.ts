export type EmployeeType = {
  id?: number
  firstName: string
  lastName: string
  startYear: string
  address: string
  trainingCompleted: boolean
}

export type EmployeeErrorsType = {
  firstName: string
  lastName: string
  address: string
  startYear: string
}

export type UserType = {
  id?: number
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirm:string
}

// export type UserFormType = {
//   firstName: string
//   lastName: string
//   email: string
//   password: string
//   confirm: string
// }

export type LoginCredentialsType = {
  email: string;
  password: string;
}

