


type Props = {
    avatar: string;
    message: React.ReactNode;
  };
const TestimonialRight = ({ avatar, message }: Props) => {
    const styles = {
        backgroundImage: `url(${avatar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
      
      return (
             <div className="relative md:w-2/5  md:h-56   h-36">
              
          <div className="relative">
         
            <div className= " rounded-tr-3xl absolute left-2 md:h-36  w-64  md:-top-4  rounded-tl-3xl text-base p-4 md:left-64 rounded-bl-3xl  shadow shadow-slate-400  bg-white">
            <div className="rounded-full absolute h-20 w-20 md:h-28 md:w-28  md:top-32 md:-right-40 -right-28 top-14 bg-slate-100" style={styles} />
              {message}
            </div>
            
           
    
          
          </div>
        </div>
    
      );
}

export default TestimonialRight