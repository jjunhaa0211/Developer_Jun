export enum AlertIcon {
    Success = 0,
    Error,
    Warning,
    Info
}
  
export interface IAlertOptions {
    title: string;
    subtitle?: string;
    icon?: AlertIcon;
    duration?: number;
}