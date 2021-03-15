import React from 'react'

function App() {
  const actionSubmitMqttCredentials = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-8 bg-gray-100">
        <div className="container mx-auto flex">
          <h1 className="text-xl">
            Smart Ordering
          </h1>
        </div>
      </header>
      <main className="bg-gray-100 flex-1">
        <div className="container mx-auto flex py-8">
          <form className="flex flex-col bg-white px-4 py-4 rounded-md shadow-lg" onSubmit={actionSubmitMqttCredentials}>
            <h2 className="text-2xl text-center">MQTT Credential</h2>
            <input type="text" placeholder="url" className="border rounded-md p-2 w-64 mt-4" />
            <input type="text" placeholder="username" className="border rounded-md p-2 w-64 mt-4" />
            <input type="password" placeholder="password" className="border rounded-md p-2 w-64 mt-4" />
            <button className="bg-blue-500 rounded-md text-white p-2 w-64 mt-4">Submit</button>
          </form>
          <div className="ml-8 w-full">
            <div className="px-6 py-4 bg-white rounded-lg shadow-lg">
              Silakan mengisi MQTT Credential agar bisa melihat pesanan yang masuk
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800">
        <div className="container mx-auto text-white py-8 px-12 text-center">
          &copy; 2021 Ilham Wahabi & Kevin Fernaldy
        </div>
      </footer>      
    </div>
  )
}

export default App
