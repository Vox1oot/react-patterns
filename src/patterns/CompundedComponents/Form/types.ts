export type Theme = { [key: string]: string };

export interface IForm {
    theme: Theme;
    children: React.ReactNode;
}
