export function Profile() {
  const avatar = "https://react.dev/images/docs/scientists/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return (
    <div
      style={{
        color: "pink",
      }}
    >
      <img className="avatar" src={avatar} alt={description} />
      <p>{description}</p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );

}


