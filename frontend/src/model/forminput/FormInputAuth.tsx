export interface FormInputLogin {
    email: string,
    password: string,
    remember ?: boolean

}

export interface FormInputRegister {
    firstname : string,
    lastname: string,
    email: string,
    password: string,
    repassword ?: string
}

export interface FormInputForgetPassword {
    email: string
}

export interface RegisterStatus {
    loading: boolean,
    data : FormInputRegister
    message: string
}

export interface PlatformAdd {
    email: string,
    platformname: string,
    companyname: string
}