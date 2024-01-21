export const decodeToken = (authToken: string) => {
  const base64Url = authToken.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const { id, email, role } = JSON.parse(decodeURIComponent(atob(base64)));
  return { id, email, role };
};
