export interface GPSLocation {
    label: string;
    lat: number;
    lng: number;
}

export interface PostSchema {
    id: string;
    title: string;
    content: string;
    imagesIds: string[];
    authorId: string;
    location: GPSLocation;
}