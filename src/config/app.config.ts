interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Department Head'],
  customerRoles: [],
  tenantRoles: ['Inventory Manager', 'Department Head', 'Equipment Supervisor'],
  tenantName: 'Company',
  applicationName: 'SAM',
  addOns: ['file'],
};
