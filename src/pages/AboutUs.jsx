import React from 'react'
import Container from '../components/ui/Container'
import { Hospital, BriefcaseMedical } from 'lucide-react'

const AboutUs = () => {
  return (
    <Container className='xlg:columns-2'>
      <section className='flex flex-col gap-y-10 w-full'>
        <div className='flex flex-col justify-center items-center text-center max-w-[600px] mx-auto'>
          <h1 className='text-2xl font-bold lg:text-4xl pb-3'>Sobre nosotros</h1>
          <p className='text-gray-600 lg:text-md'>
            Nos dedicamos a ofrecer insumos de salud de la más alta calidad para profesionales y centros médicos. Nuestro compromiso es garantizar productos confiables, seguros y accesibles, ayudando a optimizar la atención y el bienestar de los pacientes.
          </p>
        </div>
        <div className='h-[50%] flex flex-row items-center justify-center'>
          <div className='h-full flex flex-col justify-evenly max-w-[600px]'>
            <div className='flex flex-row'>
              <Hospital size={75} absoluteStrokeWidth={false} className='stroke-1 mr-4' />
              <div className='flex flex-col'>
                <h2 className='text-lg font-semibold lg:text-2xl'>Calidad Garantizada</h2>
                <p className='text-gray-600 lg:text-md'>Trabajamos con proveedores certificados y cumplimos con los estándares más exigentes del sector.</p>
              </div>
            </div>
            <div className='flex flex-row'>
              <BriefcaseMedical size={75} absoluteStrokeWidth={false} className='stroke-1 mr-4' />
              <div className='flex flex-col'>
                <h2 className='text-lg font-semibold lg:text-2xl'>Amplia Variedad</h2>
                <p className='text-gray-600 lg:text-md'>Ofrecemos un catálogo extenso de productos esenciales para clínicas, hospitales y profesionales de la salud.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center lg:'>
          <img src="../public/about_1.png" alt="Image about us" className='xlg:w-[60rem]' />
        </div>
      </section>
    </Container>
  )
}

export default AboutUs
