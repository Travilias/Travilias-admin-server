
export interface UserSchema {
    id: string;
    username: string;
    email: string;
    displayedName: string;
    created_at: string|number|null|Date;
    profile_picture: string; // only the url

}

export interface UserInfos {
    id: string;
    username: string;
    email: string;
    displayedName: string;
    created_at?: string|number|null|Date;
    profile_picture: string; // only the url

}