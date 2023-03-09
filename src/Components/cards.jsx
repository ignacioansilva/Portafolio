import Countries from '../imagenes/Home Countries.jpg'
import Barbershop from '../imagenes/Home Barbershop.jpg'
import Calc from '../imagenes/Calculadora.jpg'
import Pringles from '../imagenes/Pringles-home.jpg'




export default function Card () { 

    return(

        <div className='my-20'>
            <h1 class=" mx-auto max-w-xl text-center text-3xl font-extrabold sm:text-5xl">
               My <strong class='text-indigo-600'>Proyects</strong>
            </h1>

    <div className='grid grid-cols-4 gap-1 my-40 mb-40 mx-10'>
        
        
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-10 rounded-3xl hover:bg-slate-200 pb-5">
            <figure><img src={Countries} alt="Henry Countries" /></figure>
        <div className="card-body p-5">
            <h2 className="card-title text-lg font-semibold">Henry Countries</h2>
            <p>Page that renders a list of countries and allows you to add activities to them.</p>
        <div className="card-actions justify-end mt-5"> 
        <a rel="noreferrer" href='https://ignacioansilva.github.io/portfolio/' target='_blank' class="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Visit</a>
        </div>
        </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl m-10 rounded-3xl hover:bg-slate-200 pb-5">
            <figure><img src={Barbershop} alt="Henry Barbershop" /></figure>
        <div className="card-body p-5">
            <h2 className="card-title text-lg font-semibold">Henry BarberShop</h2>
            <p>Page of a barbershop that allows you to add and edit appointments and buy products.</p>
        <div className="card-actions justify-end mt-5">
        <a rel="noreferrer" href='https://barbershop-front-deploy.vercel.app' target='_blank' class="text-white bg-indigo-500 border-0 py-1 px-4 mt-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">Visit</a>
        </div>
        </div>
        </div> 
        
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-10 rounded-3xl hover:bg-slate-200 pb-5">
            <figure><img src={Calc} alt="Calculadora" /></figure>
        <div className="card-body p-5">
            <h2 className="card-title text-lg font-semibold">Calculator created with React</h2>
            <p>It´s a simple calculator created using React-Hooks and States</p>
        <div className="card-actions justify-end mt-5">
            <a rel="noreferrer" href='https://calculator-nine-gray.vercel.app' target='_blank' class="text-white bg-indigo-500 border-0 py-1 px-4 mt-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">Visit</a>
        </div>
        </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl m-10 rounded-3xl hover:bg-slate-200 pb-5">
            <figure><img src={Pringles} alt="Henry Barbershop" /></figure>
        <div className="card-body p-5">
            <h2 className="card-title text-lg font-semibold">Pringles App</h2>
            <p>Interface based in Pringles using React and Tailwind Css.</p>
        <div className="card-actions justify-end mt-5">
        <a rel="noreferrer" href='https://barbershop-front-deploy.vercel.app' target='_blank' class="text-white bg-indigo-500 border-0 py-1 px-4 mt-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">Visit</a>
        </div>
        </div>
        </div> 

      

    </div>
    </div>
)
}