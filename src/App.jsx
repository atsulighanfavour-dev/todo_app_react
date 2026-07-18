import React from "react";
import Gallery from "./component/Gallery";
import TodoList from "./component/todo";
import PersonTodo from "./component/person";
import { getImageUrl } from "./component/utils";

export default function App() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <Gallery />
      <ul>
        <li>Learn React</li>
        <li>Learn React Router</li>
        <li>Learn React Testing Library</li>
      </ul>
      <TodoList />
      <PersonTodo />
      <Images />

      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </>

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
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
