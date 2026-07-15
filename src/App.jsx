import React from "react";

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      {/* <Profile />
      <Profile /> */}
    </section>
  );
}

function Profile() {
  return (
    // <PageLayout>
    //   <NavigationHeader>
    //     <SearchBar />
    //     <Link to="/docs">Docs</Link>
    //   </NavigationHeader>
    //   <Sidebar />
    //   <PageContent>
    //     <TableOfContents />
    //     <DocumentationText />
    //   </PageContent>
    // </PageLayout>

    <div>
      <img
        src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
      <img
        src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
      <img
        src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    </div>
  );
}
