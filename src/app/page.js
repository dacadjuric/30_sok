export default function Home() {
  return (
    <main className="mx-auto flex flex-col bg-background text-text py-4">
      <div className="container mx-auto">
        <article className=" mx-auto">
          <p>Where developers</p>
          <div className="text-5xl font-extrabold">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              learn together
            </h1>
            <span className="box-decoration-slice bg-yellow from-indigo-600 to-pink-500 text-white px-2 ">
              learn <br /> together
            </span>
          </div>
        </article>
      </div>
    </main>
  );
}
