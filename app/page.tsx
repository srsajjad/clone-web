import { Root } from "@/interface/type";

async function getData() {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const dataResponse = await res.json();
  const data: Root = await dataResponse.data;

  return data;
}

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <>
      <section>Number of sections: {data.sections.length}</section>
    </>
  );
}
