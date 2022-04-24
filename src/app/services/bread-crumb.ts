export class BreadCrumb {
  name: string | undefined;
  route: string | undefined;
  terminalOnly?: boolean | undefined;
  afterBaseOnly?: boolean | undefined;
  pathParamList?: Array<any> | undefined;
  queryParams?: any | undefined;
  fragment?: string | undefined;
  key?: string | undefined;
}
