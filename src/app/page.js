import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    price: '$100',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of Product 2',
    price: '$150',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description of Product 3',
    price: '$80',
  },
  // Add more products here...
];

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-200 flex flex-col p-8">
        <div className="mb-8">
          <h1 className="text-xl text-black font-semibold mb-4">Describe the outfit you want</h1>
          <textarea
            className="border rounded p-2 w-full resize-none text-black"
            placeholder="Type your description here"
          ></textarea>
        <button className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
        </div>
        <div>
          <h1 className="text-xl text-black font-semibold mb-4">Select Outfit Components</h1>
          <div className="mb-4">
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="Top"
            />
          </div>
          <div className="mb-4">
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="Bottom"
            />
          </div>
          <div className="mb-4">
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="Footwear"
            />
          </div>
          <div className="mb-4">
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="Accessories"
            />
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>
      <div className="w-1/2 bg-gray-300 p-8">
        <h1 className="text-xl text-black font-semibold mb-4">Product List</h1>
        <div className="grid gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded bg-white shadow-md"
            >
              <h2 className="text-lg font-semibold text-black">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-600 font-semibold text-black">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}