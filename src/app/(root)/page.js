
import CardCarton from "../components/CardCarton";
import CardHome from "../components/CardHome";
import HomePage from "../components/HomPage";

export default function Home() {
  return (
    <>
      <div className="h-full w-full bg-gray-100 rounded-2xl">
       <HomePage title="Home Page"/>
        <div className="flex justify-center pt-25 gap-30">
          <CardHome />
          <CardCarton />
        </div>
      </div>
    </>
  );
}
