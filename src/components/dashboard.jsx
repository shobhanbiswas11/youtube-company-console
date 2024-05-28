// ['admin', 'sales']
// ['marketing']
// ['sales']

export default function Dashboard({ group }) {
  if (group.includes("admin")) {
    return <div>Welcome to Admin Dashboard</div>;
  }
  if (group.includes("marketing")) {
    return <div>Welcome to Marketing Dashboard</div>;
  }
  if (group.includes("sales")) {
    return <div>Welcome to Sales Dashboard</div>;
  }

  return <div>Welcome to the console</div>;
}
