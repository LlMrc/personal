
import styles from '../styles'
import { svgLogo } from '../costant/svglogo'

const Sevices = () => {
  return (
    <div data-scroll-section
     className={` ${styles.paddings} relative bg-[#eaf4f7]  flex flex-col justify-between items-center gap-4 rounded mx-auto  `}
    >
                   <div className='absolute mix-blend-multiply    filter blur-xl opacity-60 h-52 w-52 bottom-20 left-4 bg-pink-300 rounded-full'/>      
             <div className='absolute mix-blend-multiply  filter blur-xl opacity-60 h-52 w-52 -right-10 bg-blue-100 rounded-full'/>       
             <div className='absolute mix-blend-multiply filter   blur-xl opacity-60 h-52 w-52 -bottom-10 left-10  bg-green-200 rounded-full'/>   
        <div className='text-center'>
        <span className='text-xl'>Lorem ipsum dolor sit,</span>
            <h4 className='text-2xl lg:text-4xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
            
        </div>
        <div className='flex  flex-col md:flex-row gap-4 m-4'>
{svgLogo.map((item)=>(
    <div key={item.id} className='flex flex-col items-center gap-2  p-4 max-h-[14rem] w-[14rem]'>
        <div className='rounded-full bg-gray-400 h-16 w-16'>
        <img src={item.imgUrl} alt={item.title} className={`object-contain w-full h-full text-start p-1`}/>
        </div>
        
        <h6 className='font-bold self-start'>{item.title}</h6>
        <p className='self-center'>{item.description}</p>
    </div>
))}
        </div>
    </div>
  )
}

export default Sevices