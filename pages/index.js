import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ronald Dijkstra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="p-30 flex flex-col items-center justify-center align-center px-4 bg-white">
          <div className="max-w-md w-full border rounded-lg mx-auto my-5 p-10 flex flex-col">
            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                Defacto.nl
              </h3>
              <p className="text-gray-700 my-1">
                At Defacto we work with a stack of Middleman (Ruby SWG) and Netlify to build and deploy our multilanguage website. The website is lightning fast.
              </p>
            </div>
            <div className="mt-3">
              <a className="bg-red-500 text-white font-bold px-4 py-2 rounded focus:outline-none hover:bg-red-600" href="https://www.defacto.nl" target="_blank" rel="noopener noreferrer">Visit Defacto.nl</a>
            </div>
          </div>
          <div className="max-w-md w-full border rounded-lg mx-auto p-10 flex flex-col">
            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                CAPP LMS
              </h3>
              <p className="text-gray-700 my-1">
                We build a learning & development software suite, with a development stack of Elixir and Phoenix. We use test driven development and a feature branch/pull request workflow to get things done <i>good</i>.
              </p>
            </div>
            <div className="mt-3">
              <a className="bg-pink-500 text-white font-bold px-4 py-2 rounded focus:outline-none hover:bg-pink-600" href="https://www.defacto.nl/capp-learning" target="_blank" rel="noopener noreferrer">Visit CAPP LMS</a>
            </div>
          </div>
          <div className="max-w-md w-full border rounded-lg mx-auto my-5 p-10 flex flex-col">
            <div className="flex-1">
              <h3 className="font-semibold text-lg tracking-wide">
                Folkingebrew
              </h3>
              <p className="text-gray-700 my-1">
                I started a beer brand back in 2017 with 4 friends: Folkingebrew. In my role as Brand Manager I am responsible for our visual identity, our online and offline marketing and communication.
              </p>
            </div>
            <div className="mt-3">
              <a className="bg-green-500 text-white font-bold px-4 py-2 rounded focus:outline-none hover:bg-green-600" href="https://www.folkingebrew.nl" target="_blank" rel="noopener noreferrer">Visit Folkingebrew.nl</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
