const getBlog = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`,
    { cache: "no-cache" }
  );

  if (!res.ok) {
    throw new Error("Fetch failed");
  }

  return res.json();
};

export default async function Home() {
  const blog = await getBlog();
  return (
    <main>
      <ul>
        {blog.items.map((item: any) => (
          <li key={item.id}>{item.fields.title}</li>
        ))}
      </ul>
    </main>
  );
}
