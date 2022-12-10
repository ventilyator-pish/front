export interface CreateJWTProps {
    email: string;
    password: string;
}

export interface IResetPass {
    email: string;
}

export interface INewPass {
    new_password: string;
    repeat_new_password: string;
}

export interface IAboutUser {
    email: string;
    first_name: string;
    last_name: string;
}

export interface IRegistrationFields extends IAboutUser {
    username: string;
    password: string;
    re_password: string;
    middle_name: string;
    organization: string;
    role: string;
    agree: boolean;
}

export interface IActivationRegistration {
    uid: string;
    token: string;
}

export interface IConfirmationEmail {
    slug: string;
}

export interface INewPassword {
    new_password: string;
    current_password: string;
}
