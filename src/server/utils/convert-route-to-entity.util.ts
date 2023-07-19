const mapping: Record<string, string> = {
  companies: 'company',
  equipment: 'equipment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
