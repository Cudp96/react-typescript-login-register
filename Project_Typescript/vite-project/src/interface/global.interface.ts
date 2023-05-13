export interface dataInterface {
    fullName: string;
    phoneNumber: number;
    email: string;
    password:string;
    dob : Date;
}

export interface toasterInterface {
    position: string,
    autoClose: number,
    hideProgressBar: boolean,
    closeOnClick: boolean,
    pauseOnHover: boolean,
    draggable: boolean,
    progress: undefined,
    theme: string,
}
export interface loginInterface{
    email: string;
    password:string;
}

export interface CountStateInterface {
    count: number;
    arr: Array<string>;
}
export interface loggedInterface {
    isLoggedIn: boolean;
}