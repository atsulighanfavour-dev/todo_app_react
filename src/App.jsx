import React from "react";
import Gallery from "./component/Gallery";
import TodoList from "./component/todo";
import PersonTodo from "./component/person";


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
