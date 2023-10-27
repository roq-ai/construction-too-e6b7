interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Equipment Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Equipment Manager', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'Construction Tool Rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read equipment information', 'Book a rental', 'Make a payment', 'View own invoices'],
  ownerAbilities: ['Manage equipment', 'Create and edit company', 'Read rental', 'Read invoice'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e66f584a-d4a4-49e0-a4a6-9a80d2d4a69f',
};
