export interface IRouteObject {
    path: string;
    component: () => JSX.Element;
    title: string;
}
