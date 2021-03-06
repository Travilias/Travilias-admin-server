import ReportClass from "@tas/reports/ReportClass";
import { ReportInfos, ReportSchema } from "@tas/reports/types";

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
    createdAt: Date;
    controlType: ControlType|null;
    controlledAt: Date|null;
    reports: any[];
}

export interface PostDocument {
    _id: string;
    title: string;
    content: string;
    imagesIds: string[];
    authorId: string;
    location: GPSLocation;
    createdAt: Date;
    controlType: ControlType|null;
    controlledAt: Date|null;
    reports: ReportClass[];
}

export enum ControlType {
    VALID = "VALID",
    ILLEGAL_CONTENT = "ILLEGAL_CONTENT",
    RESTRICTED = "RESTRICTED",
    VIOLENCE = "VIOLENCE",
    DISCRIMINATION ="DISCRIMINATION",
    COPYRIGHT = "COPYRIGHT"
}