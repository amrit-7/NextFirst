export default function DocsPage({ params }) {
  if (params.slug?.length == 1) {
    return <h1>This is {params.slug[0]} feature page</h1>;
  }
  if (params.slug?.length == 2) {
    return (
      <h1>
        This is concept {params.slug[1]} page of {params.slug[0]}
      </h1>
    );
  }
  return <h1>Docs Page</h1>;
}
