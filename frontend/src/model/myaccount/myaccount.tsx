export interface RegionI {
    name: string,
    shortCode: string
}

export interface CountryI {
    countryName: string,
    countryShortCode: string,
    regions: Array<RegionI>
}

export interface UserDetailI {
    email: string,
    firstname: string,
    lastname: string,
    address1: string,
    address2: string,
    city: string,
    postal_code: string,
    country: string,
    state: string
}

export interface ChangePasswordI {
    oldpassword?: string,
    password: string,
    repassword: string

}